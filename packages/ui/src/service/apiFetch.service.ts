// eslint-disable-next-line

import { IApiFetchOptions } from "../interface/apiFetch.interface";

export default async function apiFetch<T = any>(
  endpoint: string,
  method?: string,
  body?: any,
  options?: IApiFetchOptions
): Promise<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const API_ROOT =
    (window as any).POPSTACK_API_HOST ||
    process.env.API_HOST ||
    "https://popstack.herokuapp.com";
  const API_VERSION = "v1";

  const url = [API_ROOT, "/", API_VERSION, endpoint].join("");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  if (options && options.auth && options.auth.strategy) {
    if (options.auth.strategy === "jwt") {
      const jwt = options.auth.jwt || localStorage.getItem("jwt");
      headers.Authorization = `Bearer ${jwt}`;
    }
  }

  const res = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers,
  });

  const json = await res.json();
  if (!res.ok) {
    throw json;
  } else {
    return json;
  }
}
