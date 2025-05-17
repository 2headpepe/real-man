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
      "flex gap-2 items-end",
      align === "right" ? "flex-row-reverse" : ""
    )}
  >
    <div
      className={clsx(
        "text-black flex flex-col items-end",
        align === "left" ? "items-start" : "items-end"
      )}
    >
      <p className="text-[27px] sm:text-[64px] leading-none font-damn">
        {value}
      </p>
      <p className="text-[12px] sm:text-[24px] leading-none sm:-mt-2">
        {label}
      </p>
    </div>
  </div>
);
