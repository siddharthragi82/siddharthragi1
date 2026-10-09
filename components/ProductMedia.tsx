import Image from "next/image";
import type { Product } from "@/data/portfolio";
import { cn, hexToRgba, shade } from "@/lib/utils";
import { BrowserFrame, PhoneFrame } from "./DeviceFrames";

/** Tinted backdrop behind product imagery, derived from the product's brand colour. */
export function brandTint(brand: string) {
  return {
    backgroundImage: `radial-gradient(120% 90% at 85% 0%, ${hexToRgba(brand, 0.28)}, transparent 60%), linear-gradient(160deg, ${hexToRgba(brand, 0.16)}, ${hexToRgba(brand, 0.04)})`,
  };
}

/**
 * Gradient + dot-pattern placeholder with the product's initials.
 * Used whenever a product has no image yet (see TODOs in data/portfolio.ts).
 */
export function Placeholder({ product, className, large }: { product: Product; className?: string; large?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative flex h-full w-full flex-col items-center justify-center overflow-hidden", className)}
      style={{ backgroundImage: `linear-gradient(135deg, ${product.brand}, ${shade(product.brand, 0.45)})` }}
    >
      <div className="bg-dots absolute inset-0 opacity-70" />
      <div
        className="absolute -right-10 -top-10 size-48 rounded-full blur-2xl"
        style={{ background: hexToRgba("#ffffff", 0.18) }}
      />
      <span
        className={cn(
          "relative font-display font-bold tracking-tighter text-white/95 drop-shadow-sm",
          large ? "text-[clamp(4rem,12vw,8rem)]" : "text-6xl",
        )}
      >
        {product.initials}
      </span>
      {product.logo?.src && product.logo.width && product.logo.height ? (
        <span className={cn("relative mt-4 rounded-lg bg-white/95 px-3 py-2 shadow-sm", large && "mt-6")}>
          <Image
            src={product.logo.src}
            width={product.logo.width}
            height={product.logo.height}
            alt=""
            sizes="120px"
            className="h-6 w-auto"
          />
        </span>
      ) : null}
    </div>
  );
}

/** Thumbnail artwork for a product card. */
export default function ProductMedia({ product }: { product: Product }) {
  const [first, second] = product.cover;

  if (!first) return <Placeholder product={product} />;

  if (first.frame === "phone") {
    return (
      <div className="flex h-full items-start justify-center gap-[6%] px-6 pt-7" style={brandTint(product.brand)}>
        <PhoneFrame
          image={first}
          sizes="(min-width: 1280px) 140px, (min-width: 768px) 18vw, 38vw"
          className="w-[36%] transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-2"
        />
        {second ? (
          <PhoneFrame
            image={second}
            sizes="(min-width: 1280px) 140px, (min-width: 768px) 18vw, 38vw"
            className="mt-10 w-[36%] transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-3"
          />
        ) : null}
      </div>
    );
  }

  if (first.frame === "browser") {
    return (
      <div className="relative h-full overflow-hidden" style={brandTint(product.brand)}>
        <BrowserFrame
          image={first}
          label={product.name}
          sizes="(min-width: 1280px) 440px, (min-width: 768px) 50vw, 100vw"
          className="absolute left-[8%] top-[12%] w-[108%] transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1.5"
        />
      </div>
    );
  }

  return (
    <Image
      src={first.src}
      width={first.width}
      height={first.height}
      alt={first.alt}
      sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
      className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
    />
  );
}
