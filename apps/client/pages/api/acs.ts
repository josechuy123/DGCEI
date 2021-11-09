import { IdentityProvider, ServiceProvider } from '../../saml2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import { createApolloClient } from '../../apollo/createApolloClient';
import { gql } from '@apollo/client';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const options = { request_body: req.body };

  const client = createApolloClient();

  ServiceProvider.post_assert(
    IdentityProvider,
    options,
    async (err, saml_response) => {
      if (err != null) return res.status(500).send(err);

      const JWTContent = {
        sessionID: saml_response.user.session_index,
        nameID: saml_response.user.name_id,
        user: {
          cuenta: saml_response.user.attributes.uCuenta[0],
        },
      };

      try {
        await client.mutate({
          mutation: gql`
            mutation ($user: UserInput!) {
              createUser(user: $user) {
                id
                name
                email
                account
              }
            }
          `,
          variables: {
            user: {
              name: `${saml_response.user.attributes.sn[0]} ${saml_response.user.attributes.givenName[0]}`,
              email: saml_response.user.attributes.email[0],
              account: saml_response.user.attributes.uCuenta[0],
            },
          },
        });
      } catch (e) {
        console.log(e);
      }

      /*await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${sign(JWTContent, "secret", {
            expiresIn: "15s",
          })}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: saml_response.user.attributes.sn[0],
          lastname: saml_response.user.attributes.givenName[0],
          noCuenta: saml_response.user.attributes.uCuenta[0],
          email: saml_response.user.attributes.uCorreo[0],
        }),
      }).catch(console.log);*/

      res.setHeader('Set-Cookie', [
        serialize(
          'token',
          `Bearer ${sign(JWTContent, 'secret', { expiresIn: '2h' })}`,
          {
            path: '/',
          }
        ),
      ]);
      res.redirect(302, '/');
    }
  );
}
