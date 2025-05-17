import Image from "next/image";

import Arrow from "@/assets/icons/arrow.svg";
import { ReactNode } from "react";
import clsx from "clsx";
import { HoverOverlay } from "@/ui/hover-overlay";

export const NavButton = ({
  text,
  badge,
  icon,
  padding = "",
}: {
  text: string;
  badge?: number;
  icon?: ReactNode;
  padding?: string;
}) => (
  <button
    className={clsx(
      "border border-solid bg-white rounded-[8px] group relative flex items-center py-1 sm:py-1.5 text-[24px] tracking-[0.04em]",
      padding
    )}
  >
    {text}
    {badge && <NotificationBadge count={badge} />}
    {icon}
    <HoverOverlay />
  </button>
);

export const ArrowIcon = () => (
  <Image
    src={Arrow}
    width={14}
    height={14}
    alt="Arrow"
    className="absolute right-3 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1 sm:right-4 sm:h-3.5 sm:w-3.5"
  />
);

export const NotificationBadge = ({ count }: { count: number }) => (
  <div className="rounded-full bg-[rgba(227,60,0)] border font-manrope text-white font-bold flex items-center justify-center absolute right-full h-6 w-6 translate-x-1/2 text-sm">
    {count}
  </div>
);
