"use client";

import React, { RefObject, useEffect, useState } from "react";
import Image from "next/image";
import Question from "@/assets/icons/question.svg";
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
    <h1 className="flex items-baseline gap-1.5 text-[32px] font-bold text-black leading-none">
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
