import Link from "next/link";

const NAVIGATION_TABS = [
  {
    href: "",
    title: "Buy real now",
    notifications: 1,
  },
  {
    href: "",
    title: "leaderboard",
  },
];

export const NavigationTabs = () => (
  <div className="hidden sm:grid grid-flow-col auto-cols-fr gap-1 w-full text-[16px] leading-none h-10">
    {NAVIGATION_TABS.map(({ href, title, notifications }) => (
      <Link
        key={title}
        className="linkButton flex items-center gap-1 justify-center group relative"
        href={href}
      >
        {title}
        {notifications && (
          <div className="notification relative w-5 h-5 text-2.5">
            {notifications}
          </div>
        )}
        <div className="overlay"></div>
      </Link>
    ))}
  </div>
);
