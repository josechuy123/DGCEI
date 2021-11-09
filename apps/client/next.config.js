module.exports = {
  rewrites() {
    return [
      {
        source: "/login",
        destination: "/api/login",
      },
      {
        source: "/saml2/test/acs",
        destination: "/api/acs",
      },
      {
        source: "/logout",
        destination: "/api/logout",
      },
      {
        source: "/saml2/test/sls",
        destination: "/api/sls",
      },
    ];
  },
};
