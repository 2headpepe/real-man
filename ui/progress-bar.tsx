import Coin from "@/assets/images/coin.png";
import { ResponsiveImage } from "./responsive-image";

interface ProgressBarProps {
  left: { label: string; value: number };
  right: { label: string; value: number };
  current: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  left,
  right,
  current,
}) => {
  const [leftValue, rightValue] =
    left.value < right.value
      ? [left.value, right.value]
      : [right.value, left.value];
  const progressPercentage =
    ((current - left.value) / (right.value - left.value)) * 100;

  return (
    <div className="w-full text-[12px] sm:text-l flex flex-col gap-2 sm:gap-3 min-h-full">
      <div
        className="relative w-full bg-[rgba(255,240,231)] rounded-[3px] sm:rounded-[8px] h-4.5 sm:h-[39px] flex items-center border border: border-[rgba(0,0,0,0.25)]"
        role="progressbar"
        aria-valuenow={progressPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-[3px] sm:rounded-[8px] transition-all duration-300 ease-out bg-[rgba(38,161,123)] relative 
          bg-repeat
          bg-[url('/progress-background.png')]
          bg-[length:116px_60px]
          bg-[-20px_-23px]
          sm:bg-[length:200px_135px]
          sm:bg-[-48px_-52px]
          "
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
        <div className="absolute left-[16px] text-white font-bold leading-none text-[10px] sm:text-[16px] tracking-[0.04em]">
          {leftValue}
        </div>
        <ResponsiveImage
          src={Coin}
          alt={"Coin"}
          className="-translate-x-1/2 h-[26px] sm:h-[50px] aspect-[4/5]"
        />

        <div className="absolute right-[16px] text-black opacity-25 font-bold text-[10px] sm:text-[16px] tracking-[0.04em]">
          {rightValue}
        </div>
      </div>
      <div className="flex items-center justify-center sm:justify-between w-full text-[12px] leading-none">
        <div className="font-bold hidden sm:block sm:text-[20px] md:text-[24px]">
          "{left.label}"
        </div>
        <div className="leading-none md:text-[16px] flex items-center">
          You need buy
          <span className="text-[rgba(38,161,123)] mx-1">
            {right.value - left.value} more realman
          </span>
          to level up
        </div>
        <div className="font-bold hidden sm:block sm:text-[20px] md:text-[24px]">
          "{right.label}"
        </div>
      </div>
    </div>
  );
};
