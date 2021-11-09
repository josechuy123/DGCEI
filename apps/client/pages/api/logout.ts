import type { NextApiRequest, NextApiResponse } from "next";
//import { IdentityProvider, ServiceProvider } from "../../saml2";
//import { verify } from "jsonwebtoken";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.redirect(308, "/");

  const { token } = JSON.parse(req.body);
  if (!token) return res.status(400).send("No auth token");

  //Temporary log-out solution, no SAML
  res.setHeader("Set-Cookie", [
    serialize("token", `-`, {
      path: "/",
      maxAge: -1,
    }),
  ]);
  return res.redirect(308, "/");

  /*try {
    const decryptedToken: any = verify(token.split(" ")[1], "secret", {
      ignoreExpiration: true,
      maxAge: "7h",
    });

    ServiceProvider.create_logout_request_url(
      IdentityProvider,
      {
        name_id: decryptedToken.nameID.substring(1),
        session_index: decryptedToken.sessionID.substring(1),
      },
      function (err, logout_url) {
        if (err != null) return res.status(500).send(err);
        res.redirect(302, logout_url);
      }
    );
  } catch (e) {
    console.log(e);
    return res.status(403).send("Forbidden");
  }*/
}
