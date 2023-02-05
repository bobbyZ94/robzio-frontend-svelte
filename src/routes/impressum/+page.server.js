import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const settings = await fetch(`${env.PAYLOADCMS_URL}/api/globals/settings`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}`
    }
  })
  return {
    settings: settings.json(),
  };
}