import { env } from '$env/dynamic/private';

const authorizationHeader = {
  'Content-Type': 'application/json',
  authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}` 
}

/**
 * How does it work?
 * Dynamically creates routes based on params.slug which is derived from the current url. Basically, you create links to all the blog entries
 * and when the user clicks on the link, the url updates to the blog entry url, the load function below gets called with the slug and creates
 * the page on the fly.
 */

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  const blogEntry = await fetch(`${env.PAYLOADCMS_URL}/api/blog?where[slug][equals]=${params.slug}`, {
    method: 'GET',
    authorizationHeader,
  })
  return {
    blogEntry: blogEntry.json(),
  };
}