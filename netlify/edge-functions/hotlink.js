export default async function handler(request, context) {
  const referer = request.headers.get("referer");
  const regex = /^https?:\/\/(.*\.)?test\.com(\/.*)?$/;

  if (!referer || !regex.test(referer)) {
    return new Response("Forbidden", { status: 403 });
  }

  const response = await context.next();
  return response;
}
