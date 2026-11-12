import { SITE_URL, site } from "../lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}${site.logo}`,
    image: `${SITE_URL}${site.logo}`,
    slogan: site.tagline,
    telephone: site.phoneIntl,
    sameAs: [site.instagram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
