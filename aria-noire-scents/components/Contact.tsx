import { site, whatsappLink } from "../lib/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="on-dark bg-olive py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id="contact-heading" className="text-4xl !text-ivory sm:text-5xl">Contact us</h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ivory/85">
          The quickest way to ask about fragrances is a message on WhatsApp. You can also call or follow us on Instagram.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn bg-gold text-olive hover:bg-ivory">Message on WhatsApp</a>
          <a href={site.phoneHref} className="btn border border-ivory/40 text-ivory hover:bg-ivory hover:text-olive">Call {site.phoneDisplay}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn border border-ivory/40 text-ivory hover:bg-ivory hover:text-olive">Instagram</a>
        </div>
      </div>
    </section>
  );
}
