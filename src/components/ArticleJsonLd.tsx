import { SITE_URL, SITE_NAME, AUTHOR, getPost } from "@/lib/posts";

/**
 * Renders BlogPosting + BreadcrumbList structured data for a blog post.
 * Pulls title/date from the shared posts registry so it stays in sync.
 */
export default function ArticleJsonLd({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) return null;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = `${url}/opengraph-image`;

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: AUTHOR, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-AU",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
