import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const legalPageData = await fetch(`${env.STRAPI_URL}/api/legal-page/?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  return {
    legalPageData: legalPageData.json(),
  };
}