// eslint-disable-next-line
export default async function backendFetch<T = any>(endpoint: string, method?: string, body?: any): Promise<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const API_ROOT = (window as any).POPSTACK_API_HOST || process.env.API_HOST || "http://localhost:3000";
  const API_VERSION = 'v1';

  const url = [
    API_ROOT,
    '/',
    API_VERSION,
    endpoint
  ].join('');

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

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
