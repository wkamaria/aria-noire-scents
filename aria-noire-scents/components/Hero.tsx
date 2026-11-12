import { site, whatsappLink } from "../lib/site";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-24">
      <div>
        <h1 id="hero-heading" className="rise text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          {site.name}
        </h1>
        <p className="rise rise-2 mt-5 font-serif text-2xl italic text-espresso sm:text-3xl">{site.tagline}</p>
        <p className="rise rise-3 mt-7 max-w-md text-lg leading-relaxed text-espresso/85">
          Fragrances for different tastes, moods and occasions, with a love for Arabian and Middle Eastern scents.
        </p>
        <div className="rise rise-3 mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#collection" className="btn btn-primary">Explore the collection</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Enquire on WhatsApp</a>
        </div>
      </div>
      <div className="mx-auto aspect-[4/5] w-full max-w-sm md:max-w-none">
        <Image
          src="/images/hero/pink-perfume-bottle-on-marble-with-seashells-and-orange-flower.jpg"
          alt="Pink perfume bottle with a black cap on cream marble, surrounded by seashells and an orange flower"
          width={960}
          height={1280}
          priority
          sizes="(min-width: 768px) 40vw, 90vw"
          className="arch h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
