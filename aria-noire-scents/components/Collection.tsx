import Image from "next/image";
import { collection } from "../lib/collection";
import { whatsappLink } from "../lib/site";
import Placeholder from "./Placeholder";

export default function Collection() {
  return (
    <section id="collection" aria-labelledby="collection-heading" className="bg-beige/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <h2 id="collection-heading" className="text-4xl sm:text-5xl">The Arabian Fragrance Edit</h2>
          <p className="mt-5 text-lg leading-relaxed text-espresso/85">
            Our collection is growing, and it starts with Arabian and Middle Eastern fragrances. Message us on WhatsApp to ask what is available.
          </p>
        </div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {collection.map((item) => (
            <li key={item.slug}>
              <article>
                <div className="aspect-[4/5]">
                  {item.image ? (
                    <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} sizes="(min-width:1024px) 360px, (min-width:640px) 50vw, 100vw" className="arch h-full w-full object-cover" />
                  ) : (
                    <Placeholder label="Fragrance photograph to be added" />
                  )}
                </div>
                {item.name && <h3 className="mt-5 text-2xl">{item.name}</h3>}
                {item.placeholder && (
                  <p className="mt-1 text-sm text-espresso/70">Temporary placeholder, not confirmed stock.</p>
                )}
                <a href={whatsappLink("Hello Aria Noire Scents, I'd like to ask about your Arabian fragrance collection.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-olive underline decoration-gold decoration-2 underline-offset-8 hover:text-espresso">
                  Ask about availability
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
