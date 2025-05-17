import Question from "@/assets/icons/question.svg";
import Logo from "@/assets/icons/logo.svg";
import clsx from "clsx";
import { ReactNode, RefObject, useState } from "react";
import { ResponsiveImage } from "@/ui/responsive-image";
import { usePopup } from "@/ui/use-popup";
import { HoverOverlay } from "@/ui/hover-overlay";

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
      inputType?: "small" | "default";
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
  <div
    className={clsx(
      BG_CLASSES[type],
      "max-w-full overflow-hidden border border-solid bg-white rounded-[8px]"
    )}
  >
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-26 pt-4 px-2.5 pb-2.5 sm:px-4.5 sm:py-4 rounded-[8px]">
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
  <div className="flex flex-col sm:gap-1 flex-1 sm:h-full sm:min-h-14.5 grow-1">
    <div
      className={clsx(
        "h-full text-[20px] sm:text-[24px] tracking-[0.04em] font-bold",
        type === "completed" && "line-through opacity-35"
      )}
    >
      {title}
    </div>
    {type !== "completed" && footer && (
      <div className="mt-1 sm:mt-auto">
        <Footer data={footer} />
      </div>
    )}
    {type === "completed" && (
      <button
        className="bg-[rgba(212,212,212,1)] 
        px-3 pt-2 pb-1 
        rounded-[8px]
        font-bold 
        text-sm 
        text-[rgba(1,1,1,0.35)] 
        leading-none
        cursor-auto; w-fit sm:mt-auto text-[16px] sm:text-[24px] mt-1 tracking-[0.04em]"
        disabled
      >
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
  <div className="flex gap-2 h-11 sm:h-auto">
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
        className="border border-solid bg-white rounded-[8px] flex items-center justify-center w-11 sm:w-14 group relative shadow-[0_3px_0_0_rgba(0,0,0,0.25)]"
        onClick={onClick}
        ref={ref as RefObject<HTMLButtonElement>}
      >
        <ResponsiveImage
          src={Question}
          alt="Hint"
          className="w-5 h-5 sm:w-8 sm:h-8 m-auto"
        />
        <HoverOverlay />
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
      "flex items-center justify-between w-63 rounded-[8px] px-4 sm:px-5 text-[20px] sm:text-[32px] group relative flex-1 font-bold pt-1",
      type === "completed"
        ? "bg-[rgba(212,212,212,1)] px-3 pt-2 pb-1 rounded-[8px] font-bold text-sm sm:text-[24px]text-[rgba(1,1,1,0.35)] leading-none cursor-auto"
        : "border border-solid bg-white rounded-[8px] shadow-[0_3px_0_0_rgba(0,0,0,0.25)]"
    )}
  >
    <div>{type === "completed" ? "Received" : "Reward"}</div>
    <div className="flex gap-1 items-baseline">
      <div
        className={clsx(
          "leading-none",
          type !== "completed" && "text-[rgba(38,161,123)]"
        )}
      >
        {rewardAmount}
      </div>
      <ResponsiveImage
        src={Logo}
        alt="Logo"
        className="h-4 w-4 sm:h-5.5 sm:w-5.5"
      />
    </div>
    {type !== "completed" && <HoverOverlay />}
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
        className={(clsx("input"), data.inputType === "small" ? "" : "w-full")}
        placeholder={data.placeholder}
      />
      <button
        className="border border-solid bg-white pt-1 px-6.5 font-bold leading-none rounded-[8px] group relative text-[16px] sm:text-[24px] tracking-[0.04em]"
        onClick={() => data.onSubmit(inputValue)}
      >
        Confirm
        <HoverOverlay />
      </button>
    </div>
  ) : (
    <div className="border border-solid border-[rgba(0,0,0,0.25)] bg-white rounded-[8px] px-3 pt-1.75 pb-0.75 text-[16px] sm:text-[24px] font-bold w-fit tracking-[0.04em]">
      {data.current}/{data.target}
    </div>
  );
};
