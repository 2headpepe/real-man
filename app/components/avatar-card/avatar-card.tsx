import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import LogoInverse from "@/assets/icons/logo-inverse.svg";
import Realman from "@/assets/images/realman.png";
import Soon from "@/assets/images/soon.png";

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
  <div className="hidden border border-solid bg-white rounded-[8px] sm:flex flex-col px-5 pt-4.75 pb-6 items-center">
    <button className="relative w-full h-11.5 pt-0.5 bg-black rounded-[4px] text-white shadow-[0px_-2px_0px_0px_rgba(0,0,0,0.25)]">
      <h3 className="sm:text-[32px]">{DATA.points}</h3>
      <Image
        src={Logo}
        alt={"Realman"}
        height={24}
        width={24}
        className="absolute top-2.5 right-4"
      />
    </button>
    <button className="mt-1.25 relative w-full h-11.5 pt-0.5 bg-[rgba(255,175,39)] rounded-[4px] border shadow-[0px_-2px_0px_0px_rgba(0,0,0,0.25)]">
      <h3 className="sm:text-[32px]">{DATA.money}</h3>
      <Image
        src={LogoInverse}
        alt={"Realman 2"}
        height={24}
        width={24}
        className="absolute top-2.5 right-4"
      />
    </button>
    <div className="mt-3 leading-none text-[16px]">
      {DATA.dailyIncome}
      <Image
        src={LogoInverse}
        alt={"Realman"}
        height={14}
        width={14}
        className="inline  ml-1"
      ></Image>
      /day
    </div>
    <Image
      src={Realman}
      alt={"Realman avatar"}
      height={328}
      width={116}
      className="mt-7.25"
    />

    <div className="relative grid grid-cols-2 gap-1 mt-3.5 font-bold tracking-[0.04em]">
      {DATA.comingSoonItems.map(({ id, src, percents }) => (
        <div
          key={id}
          className="relative border border-solid border-[rgba(0,0,0,0.25)] bg-white rounded-[8px] w-16 h-16 flex items-center justify-center"
        >
          <Image width={64} height={64} src={src} alt={"Soon 1"} />
          <div className="absolute border border-solid bg-white rounded-[8px] left-1 bottom-1 pt-1 px-1 text-[10px] sm:text-[12px]">
            {percents}%
          </div>
        </div>
      ))}

      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col rounded-full w-16 h-16 border m-auto bg-white text-[10px] sm:text-[12px]">
        <p>Coming</p>
        <p className="text-[rgba(227,60,0)]">
          Season {DATA.seasonInfo.seasonNumber}
        </p>
        <p>soon</p>
      </div>
    </div>
    <button className="border rounded-[8px] w-full mt-3 bg-[rgba(227,60,0)] text-white border-black text-[12px] sm:text-[16px] py-3.5 font-bold">
      buy more realman
    </button>
  </div>
);
