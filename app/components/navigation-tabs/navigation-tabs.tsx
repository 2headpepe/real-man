import { HoverOverlay } from "@/ui/hover-overlay";
import clsx from "clsx";
import Link from "next/link";

const NAVIGATION_TABS = [
  {
    href: "",
    title: "Buy real now",
  },
  {
    href: "",
    title: "leaderboard",
  },
  {
    href: "",
    title: "live stream",
  },
  {
    href: "",
    title: "roadmap",
  },
  {
    href: "",
    title: "free realmoney now",
    notifications: 3,
  },
  {
    href: "",
    title: "profile",
  },
];

export const NavigationTabs = () => (
  <>
    {NAVIGATION_TABS.map(({ href, title, notifications }) => (
      <Link
        key={title}
        className={clsx(
          "hidden sm:flex row-end-2 h-10 pb-2.5 border border-solid border-black bg-white rounded-[8px] text-center items-baseline lin gap-1 justify-center group relative text-[16px] leading-none tracking-[0.04em]",
          notifications ? "bg-[rgba(255,240,231)] font-bold pt-2.5" : "pt-3.5"
        )}
        href={href}
      >
        {title}
        {notifications && (
          <div className="rounded-full bg-[rgba(227,60,0)] border font-manrope text-white font-bold flex items-center justify-center relative w-5 h-5 text-2.5">
            {notifications}
          </div>
        )}
        <HoverOverlay />
      </Link>
    ))}
  </>
);
