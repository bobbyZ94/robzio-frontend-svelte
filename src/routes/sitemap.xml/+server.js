import { env } from '$env/dynamic/private';

export async function GET() {
  const authorizationHeader = {
    'Content-Type': 'application/json',
    authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}` 
  }

  const blog = await fetch(`${env.PAYLOADCMS_URL}/api/blog?where[_status][equals]=published`, {
    method: 'GET',
    headers: authorizationHeader
  }).then((res) => res.json())

  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >

      <!-- this is where all the urls go -->
       <url>
        <loc>https://robzio.com</loc> <!-- homepage -->
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>

      ${blog.docs
        .map(
          (blogEntry) =>
            `
      <url>
        <loc>${env.PUBLIC_PAYLOADCMS_URL}/${blogEntry.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      `
        )
        .join("")}
      <!-- this is where all the urls go -->

    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}