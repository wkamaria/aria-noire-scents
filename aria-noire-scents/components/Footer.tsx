import Logo from "./Logo";
import { navLinks, site, whatsappLink } from "../lib/site";

export default function Footer() {
  return (
    <footer className="on-dark border-t border-gold/30 bg-olive text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          {/* Logo has a white background, so it sits on a white tile on the dark footer. */}
          <div className="inline-block rounded-xl bg-white p-1">
            <Logo size={96} blend={false} className="rounded-lg" />
          </div>
          <p className="mt-4 font-serif text-xl">{site.name}</p>
          <p className="font-serif italic text-gold">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="!font-sans text-sm font-medium !text-gold">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-gold">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="!font-sans text-sm font-medium !text-gold">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={site.phoneHref} className="hover:text-gold">{site.phoneDisplay}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-ivory/15 py-5 text-center text-xs text-ivory/70">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
