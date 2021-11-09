import type { NextApiRequest, NextApiResponse } from "next";
//import { IdentityProvider, ServiceProvider } from "../../saml2";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("sls", req.body);
  res.json(req.body);
}
