export const onRequest = async ({ request }) => {
  const search = new URL(request.url).search;
  const init = {
    method: request.method,
    headers: request.headers,
    redirect: "manual",
  };
  if (request.body !== null) init.body = request.body;

  const url = new URL(
    `/${search}`,
    "https://sec-fetch-site-demo.cancer6.workers.dev/"
  );
  const res = await fetch(url, init);
  const text = await res.text();
  return new Response(text, {
    status: res.status,
    headers: res.headers,
  });
};
