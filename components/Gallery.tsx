import type { GalleryGroup } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { FramedImage } from "./DeviceFrames";
import { ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";

/** Image gallery for a case study, grouped with headings. */
export default function Gallery({ groups, productName }: { groups: GalleryGroup[]; productName: string }) {
  return (
    <div className="space-y-16">
      {groups.map((group) => {
        const allPhones = group.images.every((i) => i.frame === "phone");
        return (
          <div key={group.title}>
            <h3 className="text-xl font-semibold">{group.title}</h3>
            <ul
              className={cn(
                "mt-6 grid gap-x-6 gap-y-10",
                !allPhones && "sm:grid-cols-2",
                allPhones && group.images.length <= 4 && "grid-cols-2 lg:grid-cols-4",
                allPhones && group.images.length > 4 && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
              )}
            >
              {group.images.map((image, i) => (
                <Reveal as="li" key={image.src} delay={(i % 3) * 0.06}>
                  <figure className={cn(image.frame === "phone" && "mx-auto max-w-[15rem]")}>
                    <FramedImage
                      image={image}
                      label={productName}
                      sizes={
                        image.frame === "phone"
                          ? "(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw"
                          : "(min-width: 1280px) 600px, (min-width: 640px) 50vw, 92vw"
                      }
                    />
                    {image.caption ? (
                      <figcaption className="mt-3 flex items-start justify-between gap-3 text-sm text-muted">
                        <span>{image.caption}</span>
                        {image.frame !== "phone" ? (
                          <a
                            href={image.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-accent hover:underline"
                          >
                            Full size
                            <ArrowUpRight width={12} height={12} />
                            <span className="sr-only">: {image.caption} (opens in a new tab)</span>
                          </a>
                        ) : null}
                      </figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
