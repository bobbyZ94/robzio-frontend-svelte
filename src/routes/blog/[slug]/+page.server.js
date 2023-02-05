import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const blogData = await fetch(`${env.PAYLOADCMS_URL}/api/blogs?where[slug][equals]=${params.slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.PAYLOADCMS_API_KEY}`
    }
  })
  return {
    blogData: blogData.json(),
    slug: params.slug
  };
}