import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const aboutPageData = await fetch(`${env.STRAPI_URL}/api/about-page/?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  const contactPageData = await fetch(`${env.STRAPI_URL}/api/contact/?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  const blogPageData = await fetch(`${env.STRAPI_URL}/api/blogs?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  const projectsPageData = await fetch(`${env.STRAPI_URL}/api/projects?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  return {
    aboutPageData: aboutPageData.json(),
    contactPageData: contactPageData.json(),
    blogPageData: blogPageData.json(),
    projectsPageData: projectsPageData.json()
  };
}