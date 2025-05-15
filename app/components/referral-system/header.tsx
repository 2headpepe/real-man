"use client";

import React, { RefObject, useEffect, useState } from "react";
import Image from "next/image";
import Question from "@/public/icons/question.svg";
import { usePopup } from "@/ui/use-popup";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobile =
      typeof window !== undefined &&
      window.matchMedia("(max-width: 640)").matches;
    setIsMobile(isMobile);
  });
  return isMobile;
};

export const Header = () => {
  const isMobile = useIsMobile();
  const { PopupComponent, ref, show, hide } = usePopup({
    text: "Info about referral system",
  });

  return (
    <h1 className="mb-[12px] text-static-section-title font-bold text-black flex items-baseline gap-[4px]">
      REFERRAL SYSTEM
      <Image
        src={Question}
        alt={"Hint"}
        height={22}
        width={22}
        {...(isMobile
          ? { onClick: show }
          : { onMouseEnter: show, onMouseLeave: hide })}
        ref={ref as RefObject<HTMLImageElement>}
      />
      <PopupComponent />
    </h1>
  );
};
