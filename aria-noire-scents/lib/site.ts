// Single source of truth for brand + contact details.
// Replace the domain via NEXT_PUBLIC_SITE_URL before going live.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com"
).replace(/\/$/, "");

export const site = {
  name: "Aria Noire Scents",
  tagline: "Elegance in Every Note.",
  title: "Aria Noire Scents | Elegance in Every Note",
  description:
    "Explore the world of fragrance with Aria Noire Scents. Discover an elegant selection of fragrances, including our Arabian fragrance collection.",
  phoneDisplay: "0719758280",
  phoneHref: "tel:+254719758280",
  phoneIntl: "+254719758280",
  whatsapp: "https://wa.me/254719758280",
  instagram: "https://www.instagram.com/aria_noire_scents/",
  logo: "/images/aria-noire-scents-logo.jpg",
  logoSize: 1563,
};

export function whatsappLink(message = "Hello Aria Noire Scents, I'd like to enquire about your fragrances.") {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#collection", label: "Our Collection" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];
