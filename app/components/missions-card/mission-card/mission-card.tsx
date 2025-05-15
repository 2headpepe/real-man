import Question from "@/public/icons/question.svg";
import Logo from "@/public/icons/logo.svg";
import clsx from "clsx";
import { ReactNode, RefObject, useState } from "react";
import { ResponsiveImage } from "@/ui/responsive-image";
import { usePopup } from "@/ui/use-popup";

export type Mission = {
  id: number;
  title: ReactNode;
  rewardAmount: number;
  footer?: FooterType;
  type?: "primary" | "completed" | "default";
  hintText?: string;
};

type FooterType =
  | {
      type: "input";
      onSubmit: (text: string) => void;
      placeholder?: string;
    }
  | { type: "progress"; current: number; target: number };

const BG_CLASSES = {
  default: "bg-white",
  primary: "bg-[rgba(255,195,0,1)]",
  completed: "bg-[rgba(232,232,232,1)]",
} as const;

export const MissionCard: React.FC<Mission> = ({
  rewardAmount,
  title,
  footer,
  type = "default",
  hintText,
}) => (
  <div className={clsx(BG_CLASSES[type], "max-w-full overflow-hidden card")}>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-16 xl:gap-26 p-4 rounded">
      <ContentSection title={title} footer={footer} type={type} />
      <ActionsSection
        rewardAmount={rewardAmount}
        type={type}
        hintText={hintText}
      />
    </div>
  </div>
);

const ContentSection = ({
  title,
  footer,
  type,
}: Pick<Mission, "title" | "footer" | "type">) => (
  <div className="flex flex-col gap-3 sm:gap-1 flex-1 sm:h-full min-h-14.5 lg:min-h-14.5 grow-1">
    <div
      className={clsx(
        "flex items-center h-full subsectionTitle",
        type === "completed" && "line-through opacity-35"
      )}
    >
      {title}
    </div>
    {type !== "completed" && footer && (
      <div className="sm:mt-auto">
        <Footer data={footer} />
      </div>
    )}
    {type === "completed" && (
      <button className="disabledButton w-fit sm:mt-auto" disabled>
        Completed
      </button>
    )}
  </div>
);

const ActionsSection = ({
  rewardAmount,
  type,
  hintText,
}: Pick<Mission, "rewardAmount" | "type" | "hintText">) => (
  <div className="flex gap-2 h-11 md:h-auto">
    {hintText && <HintButton hintText={hintText} />}
    <RewardButton rewardAmount={rewardAmount} type={type} />
  </div>
);

const HintButton = ({ hintText }: { hintText: string }) => {
  const { onClick, PopupComponent, ref } = usePopup<"click">({
    text: hintText,
    triggerType: "click",
  });
  return (
    <>
      <PopupComponent />
      <button
        className="card rounded flexCenter aspect-square group relative min-w-10.5 withShadow"
        onClick={onClick}
        ref={ref as RefObject<HTMLButtonElement>}
      >
        <ResponsiveImage
          src={Question}
          alt="Hint"
          className="w-5 h-5 lg:w-8 lg:h-8"
        />
        <div className="overlay" />
      </button>
    </>
  );
};

const RewardButton = ({
  rewardAmount,
  type,
}: Pick<Mission, "rewardAmount" | "type">) => (
  <button
    className={clsx(
      "flex items-center justify-between w-63 card rounded px-4 primaryText group relative flex-1 withShadow",
      type === "completed" && "disabledButton"
    )}
  >
    <span>{type === "completed" ? "Received" : "Reward"}</span>
    <div className="flex gap-1 items-baseline">
      <span
        className={clsx(
          "leading-none",
          type !== "completed" && "text-green-extralight"
        )}
      >
        {rewardAmount}
      </span>
      <ResponsiveImage src={Logo} alt="Logo" className="h-5.5 w-5.5" />
    </div>
    {type !== "completed" && <div className="overlay" />}
  </button>
);

const Footer = ({ data }: { data: FooterType }) => {
  const [inputValue, setInputValue] = useState("");

  return data.type === "input" ? (
    <div className="flex gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input w-full"
      />
      <button
        className="card confirmText py-1 px-3 leading-none rounded group relative"
        onClick={() => data.onSubmit(inputValue)}
      >
        Confirm
        <div className="overlay" />
      </button>
    </div>
  ) : (
    <div className="secondaryCard px-3 py-2 text-sm font-medium w-fit">
      {data.current}/{data.target}
    </div>
  );
};
