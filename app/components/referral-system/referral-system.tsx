"use client";

import React, { RefObject, useCallback } from "react";
import Image from "next/image";
import CopyIcon from "@/assets/icons/copy.svg";

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
  <div className="sm:border border-solid bg-white sm:rounded-[8px] sm:px-7.5 sm:pt-9.5 sm:pb-7.5">
    <Header />
    <div className="flex flex-col gap-2 sm:flex-row mt-3 sm:mt-5">
      <ReferralLink />
      <div className="grid gap-2 grid-flow-col auto-cols-fr  grow-1">
        {REFERRAL_SYSTEM.stats.map(({ label, value }) => (
          <div
            key={label}
            className="border border-solid border-[rgba(0,0,0,0.25)] bg-white rounded-[8px] flex items-start sm:items-center justify-center flex-col p-2.25 flex-1 gap-0.5"
          >
            <p className="text-[20px] sm:text-[24px] font-bold">{value}</p>
            <p className="text-[10px] sm:text-[12px] text-[rgba(1,1,1,0.35)]">
              {label}
            </p>
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
    <div className="border border-solid border-[rgba(0,0,0,0.25)] bg-white grow-1 flex items-center justify-between p-2.25 pr-3.5 sm:py-3.5 sm:px-4.5 rounded-[8px]">
      <div className="leading-none">
        <span className="text-[rgba(38,161,123)] font-bold text-[20px] sm:text-[24px]">
          {REFERRAL_SYSTEM.link}
        </span>
        <h2 className="text-[10px] sm:text-[12px] tracking-[0.04em]">
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
