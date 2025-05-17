import Profile from "@/assets/icons/footer/profile.svg";
import Buy from "@/assets/icons/footer/buy.svg";
import Leaderboard from "@/assets/icons/footer/leaderbord.svg";
import LiveStream from "@/assets/icons/footer/live-stream.svg";
import Missions from "@/assets/icons/footer/missions.svg";
import Image from "next/image";
import clsx from "clsx";

const FOOTER_ITEMS = [
  {
    id: 1,
    label: "Profile",
    icon: Profile,
  },
  {
    id: 2,
    label: "Buy",
    icon: Buy,
  },
  {
    id: 3,
    label: "Leaderboard",
    icon: Leaderboard,
  },
  {
    id: 4,
    label: "Live Stream",
    icon: LiveStream,
  },
  {
    id: 5,
    label: "Missions",
    icon: Missions,
  },
];

const SELECTED_TAB = FOOTER_ITEMS[FOOTER_ITEMS.length - 1].id;

export const Footer = () => (
  <div className="flex sm:hidden justify-between bg-black py-2 pl-5 pr-7 fixed bottom-0 w-full h-[58px]">
    {FOOTER_ITEMS.map(({ id, label, icon }) => (
      <div
        key={id}
        className="flex flex-col items-center max-h-full gap-1 relative"
      >
        <div>
          <Image
            src={icon}
            alt="Description"
            className="object-cover"
            style={{
              width: "auto",
              height: "26px",
            }}
          />
        </div>

        <p
          className={clsx(
            "text-[8px]",
            SELECTED_TAB === id
              ? "text-[rgba(255,175,39)]"
              : "text-[rgba(255,255,255,0.35)]"
          )}
        >
          {label}
        </p>
      </div>
    ))}
  </div>
);
