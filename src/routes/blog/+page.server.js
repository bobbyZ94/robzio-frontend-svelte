import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const blogsData = await fetch('http://127.0.0.1:1337/api/blogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  return {
    blogsData: blogsData.json(),
    slug: params.slug
  };
}