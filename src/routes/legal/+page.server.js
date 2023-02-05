import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const legal = await fetch(`${env.PAYLOADCMS_URL}/api/globals/legal`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}`
    }
  })
  return {
    legal: legal.json(),
  };
}