import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

export const ResponsiveImage = ({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
}) => (
  <div className={clsx("relative", className)}>
    <Image
      src={src}
      fill
      alt={alt}
      priority={priority}
      className="object-contain"
    />
  </div>
);
