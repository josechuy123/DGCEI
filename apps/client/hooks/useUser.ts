import { useEffect, useState } from "react";
import { makeProtectedRequest } from "../utils/request";

export function useUser(noCuenta: string) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    makeProtectedRequest({
      method: "GET",
      route: `http://localhost:3000/users/${noCuenta}`,
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => setError(err));
  }, []);

  return {
    user: user,
    isLoading: !error && !user,
    isError: error,
  };
}
