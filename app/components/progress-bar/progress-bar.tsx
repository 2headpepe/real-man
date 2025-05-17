import Belt from "@/assets/images/belt.png";
import Watch from "@/assets/images/watch.png";
import { ProgressBar } from "@/ui/progress-bar";
import { LevelDisplay } from "./components/level-display";
import clsx from "clsx";
import Image from "next/image";

const LEVEL_DATA = {
  current: {
    value: "10",
    image: {
      src: Belt,
      alt: "Belt",
      className: "bg-[rgba(58,140,114)]",
    },
  },
  next: {
    value: "11",
    image: {
      src: Watch,
      alt: "Watch",
      className: "bg-[rgba(248,197,32)]",
    },
  },
};

const PROGRESS_DATA = {
  left: { value: 10_000, label: "Richman" },
  right: { value: 11_350, label: "Tycoon" },
  current: 11_000,
};

export const ProgressCard = () => (
  <div className="flex justify-between px-5 pt-2 pb-1.5 sm:p-2 bg-white rounded-[8px] sm:border">
    <div
      className={clsx(
        "hidden sm:flex items-center justify-center rounded-[8px] border min-w-24.5",
        LEVEL_DATA.current.image.className
      )}
    >
      <Image
        src={LEVEL_DATA.current.image.src}
        alt={LEVEL_DATA.current.image.alt}
        width={79}
        height={45}
        className="object-contain w-10 sm:w-14.5"
      />
    </div>
    <div className="flex items-start justify-between w-full gap-2.5 sm:h-a mt-auto sm:mt-5 sm:gap-25 sm:ml-2 sm:mr-3.5">
      <LevelDisplay {...LEVEL_DATA.current} align="left" />

      <div className="flex-1 shrink-1 min-w-0 min-h-full tracking-[0.04em]">
        <ProgressBar {...PROGRESS_DATA} />
      </div>

      <LevelDisplay {...LEVEL_DATA.next} align="right" />
    </div>

    <div
      className={clsx(
        "hidden sm:flex items-center justify-center rounded-[8px] border min-w-24.5",
        LEVEL_DATA.next.image.className
      )}
    >
      <Image
        src={LEVEL_DATA.next.image.src}
        alt={LEVEL_DATA.next.image.alt}
        width={58}
        height={80}
        className="object-contain w-10 sm:w-14.5"
      />
    </div>
  </div>
);
