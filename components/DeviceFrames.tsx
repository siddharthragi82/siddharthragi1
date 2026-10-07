import Image from "next/image";
import type { ImageAsset } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FrameProps = {
  image: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Phone mockup drawn entirely in CSS. Radii and bezel are percentages,
 * so the frame keeps its proportions at any width.
 */
export function PhoneFrame({ image, className, sizes = "(min-width: 1024px) 240px, 45vw", priority }: FrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[14%/6.5%] bg-[#0c0e13] p-[3.4%] shadow-device ring-1 ring-white/10",
        className,
      )}
    >
      <span aria-hidden="true" className="absolute -left-[1.6%] top-[17%] h-[5%] w-[1.6%] rounded-l-sm bg-[#0c0e13]" />
      <span aria-hidden="true" className="absolute -left-[1.6%] top-[25%] h-[8%] w-[1.6%] rounded-l-sm bg-[#0c0e13]" />
      <span aria-hidden="true" className="absolute -right-[1.6%] top-[22%] h-[11%] w-[1.6%] rounded-r-sm bg-[#0c0e13]" />
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[11%/5.1%] bg-black">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

/** Browser window mockup drawn in CSS. */
export function BrowserFrame({
  image,
  className,
  sizes = "(min-width: 1024px) 720px, 92vw",
  priority,
  label,
}: FrameProps & { label?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-black/10 bg-surface shadow-device dark:border-white/10",
        className,
      )}
    >
      <div aria-hidden="true" className="flex h-7 items-center gap-1.5 border-b border-line bg-surface-2 px-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        {label ? (
          <span className="mx-auto hidden h-4 min-w-0 max-w-[14rem] flex-1 items-center justify-center truncate rounded-md bg-bg px-2 text-[10px] font-medium text-muted sm:flex">
            {label}
          </span>
        ) : null}
      </div>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Plain rounded figure for photos, charts and marketing artwork. */
export function FigureFrame({ image, className, sizes = "(min-width: 1024px) 560px, 92vw", priority }: FrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-surface shadow-card", className)}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Pick the right frame for an image based on its `frame` field. */
export function FramedImage(props: FrameProps & { label?: string }) {
  if (props.image.frame === "phone") return <PhoneFrame {...props} />;
  if (props.image.frame === "browser") return <BrowserFrame {...props} />;
  return <FigureFrame {...props} />;
}
