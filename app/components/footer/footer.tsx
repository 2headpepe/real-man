import Profile from "@/public/icons/footer/profile.svg";
import Buy from "@/public/icons/footer/buy.svg";
import Leaderboard from "@/public/icons/footer/leaderbord.svg";
import LiveStream from "@/public/icons/footer/live-stream.svg";
import Missions from "@/public/icons/footer/missions.svg";

const FOOTER_ITEMS = [
  {
    label: "Profile",
    icon: Profile,
  },
  {
    label: "Buy",
    icon: Buy,
  },
  {
    label: "Leaderboard",
    icon: Leaderboard,
  },
  {
    label: "Live Stream",
    icon: LiveStream,
  },
  {
    label: "Missions",
    icon: Missions,
  },
];

import { ResponsiveImage } from "@/ui/responsive-image";

export const Footer = () => (
  <div className="grid sm:hidden grid-flow-col auto-cols-fr bg-black py-2 fixed bottom-0 w-full">
    {FOOTER_ITEMS.map(({ label, icon }) => (
      <div key={label} className="flex flex-col items-center h-full gap-1">
        <ResponsiveImage
          src={icon}
          alt={label}
          className="h-8 w-8"
        ></ResponsiveImage>
        <p className="text-[rgba(255,255,255,0.35)] text-[8px]">{label}</p>
      </div>
    ))}
  </div>
);
