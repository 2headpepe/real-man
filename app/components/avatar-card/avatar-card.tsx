import Image from "next/image";
import Logo from "@/public/icons/logo.svg";
import LogoInverse from "@/public/icons/logo-inverse.svg";
import Realman from "@/public/images/realman.png";
import Soon from "@/public/images/soon.png";

const DATA = {
  points: "30910",
  money: "30 M",
  dailyIncome: 140,
  comingSoonItems: [...Array(4).keys()].map((e) => ({
    percents: 15,
    src: Soon,
    id: e,
  })),
  seasonInfo: {
    seasonNumber: 2,
  },
};

export const AvatarCard = () => (
  <div className="hidden card lg:flex flex-col px-5 pt-5 pb-6 items-center">
    <button className="relative text-8 w-41 h-12 flexCenter gap-1.5 bg-black rounded text-white">
      <h3>{DATA.points}</h3>
      <Image
        src={Logo}
        alt={"Realman"}
        height={24}
        width={24}
        className="absolute top-3 right-4"
      />
    </button>
    <button className="mt-1 relative text-8 w-41 h-12 flexCenter gap-1.5 bg-[rgba(255,175,39)] rounded border">
      <h3>{DATA.money}</h3>
      <Image
        src={LogoInverse}
        alt={"Realman 2"}
        height={24}
        width={24}
        className="absolute top-3 right-4"
      />
    </button>
    <div className="mt-3">
      {DATA.dailyIncome}{" "}
      <Image
        src={LogoInverse}
        alt={"Realman"}
        height={14}
        width={14}
        className="inline"
      ></Image>
      /day
    </div>
    <Image
      src={Realman}
      alt={"Realman avatar"}
      height={328}
      width={116}
      className="mt-7"
    ></Image>

    <div className="relative grid grid-cols-2 gap-1 mt-3.5">
      {DATA.comingSoonItems.map(({ id, src, percents }) => (
        <div
          key={id}
          className="relative secondaryCard w-16 h-16 flex items-center justify-center"
        >
          <Image width={64} height={64} src={src} alt={"Soon 1"} />
          <div className="absolute card left-1 bottom-1 py-0.5 px-1 description flex items-baseline justify-center">
            {percents}%
          </div>
        </div>
      ))}

      <div className="absolute top-0 left-0 right-0 bottom-0 flexCenter flex-col rounded-full w-16 h-16 border  m-auto bg-white description ">
        <p>Coming</p>
        <p className="text-red">Season {DATA.seasonInfo.seasonNumber}</p>
        <p>soon</p>
      </div>
    </div>
    <button className="border rounded w-full mt-3 bg-red text-white border-black text py-3.5">
      buy more realman
    </button>
  </div>
);
