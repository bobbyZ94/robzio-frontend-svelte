import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const blogData = await fetch(`http://127.0.0.1:1337/api/blogs?filters[Slug]$eq]=${params.slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  return {
    blogData: blogData.json(),
    slug: params.slug
  };
}