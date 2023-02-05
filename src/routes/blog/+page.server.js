import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const blogsData = await fetch(`${env.PAYLOADCMS_URL}/api/blogs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}`
    }
  })
  return {
    blogsData: blogsData.json(),
    slug: params.slug
  };
}