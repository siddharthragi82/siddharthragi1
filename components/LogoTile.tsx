import Image from "next/image";
import type { Logo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Logo on a light tile. Monochrome by default, full colour on hover
 * (set `mono={false}` to always show colour). Logos without a file fall
 * back to a text wordmark so nothing ever renders broken.
 */
export default function LogoTile({
  logo,
  mono = true,
  size = "md",
  className,
}: {
  logo: Logo;
  mono?: boolean;
  size?: "sm" | "md";
  className?: string;
}) {
  const squareish = logo.width && logo.height ? logo.width / logo.height < 1.7 : false;
  const tile = size === "sm" ? "h-11 min-w-11 px-2 rounded-lg" : "h-16 px-5 rounded-xl";
  const imgBox =
    size === "sm"
      ? squareish
        ? "max-h-8 max-w-[2rem]"
        : "max-h-6 max-w-[6.5rem]"
      : squareish
        ? "max-h-11 max-w-[4.5rem]"
        : "max-h-9 max-w-[8.5rem]";
  const tone = mono
    ? "grayscale opacity-60 transition-[filter,opacity] duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100"
    : "";

  return (
    <div
      className={cn(
        "group/logo flex shrink-0 items-center justify-center bg-white ring-1 ring-black/5 dark:ring-white/10",
        tile,
        className,
      )}
    >
      {logo.src && logo.width && logo.height ? (
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt={`${logo.name} logo`}
          sizes={size === "sm" ? "104px" : "140px"}
          className={cn("h-auto w-auto object-contain", imgBox, tone)}
        />
      ) : (
        <span
          role="img"
          aria-label={`${logo.name} logo`}
          className={cn(
            "font-display font-bold tracking-tight text-neutral-500 transition-colors duration-300 group-hover/logo:text-[#E4572E]",
            size === "sm" ? "text-[10px]" : "text-lg",
          )}
        >
          {logo.name}
        </span>
      )}
    </div>
  );
}
