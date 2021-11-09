import { parseCookies } from "nookies";

interface MakeRequestArgs {
  route: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  body?: any;
}

export async function makeProtectedRequest({
  route,
  method,
  body = null,
}: MakeRequestArgs) {
  const cookies = parseCookies();
  const res = await fetch(route, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: cookies.token,
    },
    body: body,
  });
  return res;
}

export async function makeRequest({
  route,
  method,
  body = null,
}: MakeRequestArgs) {
  const res = await fetch(route, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  return res;
}
