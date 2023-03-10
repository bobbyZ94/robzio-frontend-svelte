import { env } from '$env/dynamic/private';

const authorizationHeader = {
  'Content-Type': 'application/json',
  authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}`
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const blog = await fetch(`${env.PAYLOADCMS_URL}/api/blog?where[_status][equals]=published`, {
    method: 'GET',
    headers: authorizationHeader
  })
  return {
    blog: blog.json(),
  };
}