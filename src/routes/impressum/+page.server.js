import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const siteInformation = await fetch(`${env.STRAPI_URL}/api/site-information/?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  return {
    siteInformation: siteInformation.json(),
  };
}