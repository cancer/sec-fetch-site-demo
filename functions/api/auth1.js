export const onRequest = ({ request }) => {
  const url = new URL(request.url);
  return new Response("", {
    status: 302,
    headers: {
      Location: url.origin,
      "Set-Cookie": "cancer_test=test; SameSite=Strict; Secure; HttpOnly; Path=/"
    },
  });
};
