import Belt from "@/public/images/belt.png";
import Watch from "@/public/images/watch.png";
import { ProgressBar } from "@/ui/progress-bar";
import { LevelDisplay } from "./components/level-display";

const LEVEL_DATA = {
  current: {
    value: "10",
    image: {
      src: Belt,
      alt: "Belt",
      className: "bg-green",
    },
  },
  next: {
    value: "11",
    image: {
      src: Watch,
      alt: "Watch",
      className: "bg-yellow",
    },
  },
};

const PROGRESS_DATA = {
  left: { value: 10_000, label: "Richman" },
  right: { value: 11_350, label: "Tycoon" },
  current: 11_000,
};

export const ProgressCard = () => (
  <div className="flex items-center justify-between gap-4 p-2 sm:gap-8 lg:gap-12 xl:gap-12 bg-white rounded border-primary sm:border">
    <LevelDisplay {...LEVEL_DATA.current} align="left" />

    <div className="flex-1 min-w-0">
      <ProgressBar {...PROGRESS_DATA} />
    </div>

    <LevelDisplay {...LEVEL_DATA.next} align="right" />
  </div>
);
