export async function apiFetch<T = unknown>(
  input: RequestInfo | string,
  init?: RequestInit | undefined,
) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${input}`, init);
  const result = await data.json();

  return result as T;
}