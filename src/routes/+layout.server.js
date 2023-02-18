import { env } from '$env/dynamic/private';

const authorizationHeader = {
                              'Content-Type': 'application/json',
                              authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}` 
                            }

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
  const settings = await fetch(`${env.PAYLOADCMS_URL}/api/globals/settings`, {
    method: 'GET',
    headers: authorizationHeader
  })
  return {
    settings: settings.json(),
  };
}