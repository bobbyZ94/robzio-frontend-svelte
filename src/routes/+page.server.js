import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const aboutPageData = await fetch('http://127.0.0.1:1337/api/about-page/?populate=*', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  const contactPageData = await fetch('http://127.0.0.1:1337/api/contact/?populate=*', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  const blogPageData = await fetch('http://127.0.0.1:1337/api/blogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  const projectsPageData = await fetch('http://127.0.0.1:1337/api/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${env.STRAPI_READ_KEY}`
    }
  })
  return {
    aboutPageData: aboutPageData.json(),
    contactPageData: contactPageData.json(),
    blogsPageData: blogPageData.json(),
    projectsPageData: projectsPageData.json()
  };
}