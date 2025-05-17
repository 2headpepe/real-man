import Logo from "@/assets/icons/logo.svg";
import RealMan from "@/assets/icons/realman.svg";
import { ResponsiveImage } from "@/ui/responsive-image";
import { ArrowIcon, NavButton } from "./components";
import { HoverOverlay } from "@/ui/hover-overlay";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 left-0 right-0 px-2.5 sm:px-0 sm:left-[48px] sm:right-[48px] flex h-13 items-start justify-between pt-2.5 pb-1.5 sm:h-40 sm:pt-9 bg-[rgba(255,250,246)] border-b-1 sm:border-b-0 sm:bg-transparent">
      <LogoButton />
      <DesktopNav />
      <ContextMenu />
    </header>
  );
};

const LogoButton = () => (
  <button className="border border-solid bg-white rounded-[8px] group relative flex items-center gap-1.25 py-1.5 px-3.5 sm:gap-3 sm:py-3 sm:px-10">
    <ResponsiveImage
      src={Logo}
      alt="Logo"
      className="w-5.5 h-5.5 sm:w-12 sm:h-12"
      priority
    />
    <ResponsiveImage
      src={RealMan}
      alt="Real man"
      className="w-13.5 h-5.5 sm:w-29 sm:h-8.5"
      priority
    />
    <HoverOverlay />
  </button>
);

const DesktopNav = () => (
  <nav className="hidden sm:flex sm:items-center sm:gap-2">
    <NavButton text="News" badge={3} padding="px-4 sm:px-4.75 sm:py-3.25" />
    <NavButton text="Get out" icon={<ArrowIcon />} padding="px-6 sm:px-9.5 sm:py-3.25" />
  </nav>
);

const ContextMenu = () => (
  <nav className="border border-solid bg-white rounded-[8px] flex w-13.5 flex-col gap-0.5 p-3 sm:hidden">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="h-0.5 bg-black" />
    ))}
  </nav>
);
