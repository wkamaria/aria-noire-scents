import Image from "next/image";
import { site } from "../lib/site";

// Renders the supplied logo untouched. Always square (1:1) so it is never distorted.
export default function Logo({
  size,
  className = "",
  priority = false,
  blend = true,
}: {
  size: number;
  className?: string;
  priority?: boolean;
  blend?: boolean;
}) {
  return (
    <Image
      src={site.logo}
      alt="Aria Noire Scents logo: a gold silhouette inside a brushed circle with the tagline Elegance in Every Note"
      width={site.logoSize}
      height={site.logoSize}
      sizes={`${size}px`}
      priority={priority}
      style={{ width: size, height: size }}
      className={`${blend ? "logo-blend" : ""} ${className}`}
    />
  );
}
