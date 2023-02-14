import { env } from '$env/dynamic/private';

const authorizationHeader = {
                              'Content-Type': 'application/json',
                              authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}` 
                            }

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const about = await fetch(`${env.PAYLOADCMS_URL}/api/globals/about`, {
    method: 'GET',
    headers: authorizationHeader
  })
  const contact = await fetch(`${env.PAYLOADCMS_URL}/api/globals/contact`, {
    method: 'GET',
    headers: authorizationHeader
  })
  const blog = await fetch(`${env.PAYLOADCMS_URL}/api/blog?where[_status][equals]=published`, {
    method: 'GET',
    headers: authorizationHeader
  })
  const projects = await fetch(`${env.PAYLOADCMS_URL}/api/projects?where[_status][equals]=published`, {
    method: 'GET',
    headers: authorizationHeader
  })
  return {
    about: about.json(),
    contact: contact.json(),
    blog: blog.json(),
    projects: projects.json()
  };
}