import Logo from "./Logo";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:py-28">
      <div className="mx-auto">
        <Logo size={320} className="max-w-full" />
      </div>
      <div className="max-w-xl space-y-5 text-lg leading-relaxed text-espresso/85">
        <h2 id="about-heading" className="mb-6 text-4xl sm:text-5xl">About Aria Noire Scents</h2>
        <p>
          A fragrance is more than just a finishing touch. It&rsquo;s part of how you present yourself, how you&rsquo;re remembered and, sometimes, how you feel.
        </p>
        <p>
          At Aria Noire Scents, we believe finding a fragrance should be an enjoyable and personal experience. We bring together fragrances for different tastes, moods and occasions, with a particular appreciation for the richness and character of Arabian and Middle Eastern scents.
        </p>
        <p>
          From soft and delicate to deep, warm and captivating, there&rsquo;s something special about finding a scent that feels like you.
        </p>
        <p>
          Our collection is growing, and so is our appreciation for the many ways fragrance can be enjoyed. Whether you&rsquo;re choosing something for yourself or looking for a thoughtful gift, we&rsquo;re here to help you find a scent worth wearing.
        </p>
        <p className="pt-2 font-serif text-2xl text-olive">
          Aria Noire Scents. <span className="italic">Elegance in Every Note.</span>
        </p>
      </div>
    </section>
  );
}
