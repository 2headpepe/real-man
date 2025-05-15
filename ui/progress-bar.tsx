import Coin from "@/public/images/coin.png";
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
    <div className={"w-full text-[12px] sm:text-l lg:text-[16px]"}>
      <div
        className="relative w-full bg-progress-bg rounded-[3px] sm:rounded-[8px] h-[16px] sm:h-[30px] lg:h-[39px] flex items-center"
        role="progressbar"
        aria-valuenow={progressPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="absolute left-[16px] text-white font-bebas-neue font-bold leading-none">
          {leftValue}
        </div>
        <div
          className={
            "h-full rounded-[3px] sm:rounded-[8px] transition-all duration-300 ease-out bg-green-light"
          }
          style={{ width: `${progressPercentage}%` }}
        />

        <ResponsiveImage
          src={Coin}
          alt={"Coin"}
          className="-translate-x-1/2 h-[26px] sm:h-[40px] lg:h-[50px] aspect-[4/5]"
        />

        <div className="absolute right-[16px] text-black opacity-25 font-bebas-neue font-bold">
          {rightValue}
        </div>
      </div>
      <div className="flex justify-between mt-[12px] font-bebas-neue">
        <div className="font-bold">"{left.label}"</div>
        <div className="grow-1 text-center font-medium">
          You need buy{" "}
          <span className="text-green-extralight">
            {rightValue - leftValue} more realman
          </span>{" "}
          to level up
        </div>
        <div className="font-bold">"{right.label}"</div>
      </div>
    </div>
  );
};
