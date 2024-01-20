export default async function handler(request, context) {
  const referer = request.headers.get("referer");
  const regex = /^https?:\/\/(.*\.)?netlify\.app(\/.*)?$/;
  //https://main--playful-gaufre-c2dac7.netlify.app/
  if (!referer || !regex.test(referer)) {
    return new Response("Forbidden", { status: 403 });
  }

  const response = await context.next();
  return response;
}
