import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type LevelDisplayProps = {
  value: string;
  label?: string;
  image?: {
    src: string | StaticImageData;
    alt: string;
    className?: string;
  };
  align?: "left" | "right";
};

export const LevelDisplay = ({
  value,
  label = "LVL",
  image,
  align = "left",
}: LevelDisplayProps) => (
  <div
    className={clsx(
      "flex gap-2 items-end max-h-[60px] sm:max-h-[80px] lg:max-h-[100px]",
      align === "right" ? "flex-row-reverse" : ""
    )}
  >
    {image && (
      <div
        className={clsx(
          "hidden sm:flex items-center justify-center rounded border w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25",
          image.className
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={align === "left" ? 79 : 58}
          height={align === "left" ? 45 : 80}
          className="object-contain w-10 sm:w-12 lg:w-14.5"
        />
      </div>
    )}

    <div
      className={clsx(
        "text-black font-damn flex flex-col items-end",
        align === "left" ? "items-start" : "items-end"
      )}
    >
      <p className="text-4xl sm:text-5xl lg:text-16 leading-none">{value}</p>
      <p className="text-base sm:text-xl lg:text-6 leading-none">{label}</p>
    </div>
  </div>
);
