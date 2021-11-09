import type { NextApiRequest, NextApiResponse } from "next";
import { IdentityProvider, ServiceProvider } from "../../saml2";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ServiceProvider.create_login_request_url(
    IdentityProvider,
    {},
    (err, login_url, _) => {
      if (err != null) return res.status(500).send(err);
      res.redirect(302, login_url);
    }
  );
}
