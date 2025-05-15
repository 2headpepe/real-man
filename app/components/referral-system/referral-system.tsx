import React, { RefObject, useCallback } from "react";
import Image from "next/image";
import CopyIcon from "@/public/icons/copy.svg";

import { usePopup } from "@/ui/use-popup";
import { Header } from "./header";

const REFERRAL_SYSTEM = {
  link: "REALMAN.MEME/REF/11.4.6.1FZ",
  stats: [
    { value: 12, label: "NUMBER OF REFERRALS" },
    { value: "5%", label: "BONUS AMOUNT" },
    { value: "984.02 USDT", label: "AMOUNT OF REWARDS" },
  ],
};

export const ReferralSystem = () => (
  <div className="sm:border border-solid border-border-primary bg-white sm:rounded-[8px] sm:p-6">
    <Header />
    <div className="flex flex-col gap-[8px] md:flex-row">
      <ReferralLink />
      <div className="grid gap-[8px] grid-flow-col auto-cols-fr">
        {REFERRAL_SYSTEM.stats.map(({ label, value }) => (
          <div
            key={label}
            className="secondaryCard flexCenter flex-col p-2 flex-1"
          >
            <p className="subsectionTitle font-bold">{value}</p>
            <p className="description text-text-secondary">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReferralLink = () => {
  const { onClick, PopupComponent, ref } = usePopup<"click">({
    text: "Copied to clipboard",
    triggerType: "click",
  });

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(REFERRAL_SYSTEM.link);
    onClick();
  }, [onClick]);

  return (
    <div className="secondaryCard grow-1 flex items-center justify-between p-3 rounded">
      <div>
        <span className="text-green-extralight font-bold subsectionTitle">
          {REFERRAL_SYSTEM.link}
        </span>
        <h2 className="text-static-section-title description">
          YOUR REFERRAL LINK
        </h2>
      </div>

      <button
        onClick={copyToClipboard}
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Copy referral link"
        ref={ref as RefObject<HTMLButtonElement>}
      >
        <Image src={CopyIcon} alt={"Copy"} height={24} width={24} />
      </button>
      <PopupComponent />
    </div>
  );
};
