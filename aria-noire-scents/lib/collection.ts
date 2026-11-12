// Collection data. Photos are real; product NAMES are intentionally left out
// until confirmed. To add a name, set `name` (a heading will then appear).
// To add a product: drop an image in /public/images/collection/ and add an entry.
// `slug` is reserved for future /collection/[slug] product pages.
export type CollectionItem = {
  slug: string;
  placeholder: boolean;
  name?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

const img = (file: string, alt: string) => ({
  src: `/images/collection/${file}`,
  alt,
  width: 960,
  height: 1280,
});

export const collection: CollectionItem[] = [
  {
    slug: "fragrance-one",
    placeholder: false,
    image: img("sensuos-night-perfume-bottle-in-tree.jpg", "Dark perfume bottle with a gold cap resting among tree branches"),
  },
  {
    slug: "fragrance-two",
    placeholder: false,
    image: img("sia-vanilla-perfume-bottle-on-weathered-post.jpg", "SIA Vanilla perfume bottle with a gold cap beside a weathered wooden post under a blue sky"),
  },
  {
    slug: "fragrance-three",
    placeholder: false,
    image: img("delilah-pour-femme-pink-perfume-bottle-with-tassel.jpg", "Pink Delilah Pour Femme perfume bottle with a pink tassel on dry branches"),
  },
  {
    slug: "fragrance-four",
    placeholder: false,
    image: img("dush-chocolate-perfume-bottle-peach-cap.jpg", "Peach-coloured Dush Chocolate perfume bottle with a black tassel on dry branches"),
  },
  {
    slug: "fragrance-five",
    placeholder: false,
    image: img("club-de-nuit-maleka-purple-perfume-bottle.jpg", "Purple Club de Nuit Maleka perfume bottle with a gold medallion on a stone ledge"),
  },
  {
    slug: "fragrance-six",
    placeholder: false,
    image: img("open-fragrance-gift-box-with-perfume-bottle.jpg", "Open cream and gold fragrance gift box showing the perfume bottle inside, set among tree branches"),
  },
];
