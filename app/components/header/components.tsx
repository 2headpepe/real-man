import Image from "next/image";

import Arrow from "@/public/icons/arrow.svg";
import { ReactNode } from "react";
import clsx from "clsx";

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
      "card group relative flex items-center py-1 sm:py-1.5",
      padding
    )}
  >
    {text}
    {badge && <NotificationBadge count={badge} />}
    {icon}
    <div className="overlay" />
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
  <div className="notification absolute right-full h-6 w-6 translate-x-1/2 text-sm">
    {count}
  </div>
);
