import * as saml2 from "saml2-js";
import * as fs from "fs";

export const ServiceProvider = new saml2.ServiceProvider({
  entity_id: "http://dgice-academy.dgre.local/",
  private_key: fs.readFileSync(process.cwd() + "\\saml2\\sp.key"),
  certificate: fs.readFileSync(process.cwd() + "\\saml2\\sp.crt"),
  assert_endpoint: "http://dgice-academy.dgre.local/saml2/test/acs",
  nameid_format: "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent",
});

export const IdentityProvider = new saml2.IdentityProvider({
  sso_login_url: "https://dgre2.ucol.mx/simplesaml/saml2/idp/SSOService.php",
  sso_logout_url:
    "https://dgre2.ucol.mx/simplesaml/saml2/idp/SingleLogoutService.php",
  certificates: [fs.readFileSync(process.cwd() + "\\saml2\\sp.crt")],
});
