import Logo from "@/public/icons/logo.svg";
import RealMan from "@/public/icons/realman.svg";
import { ResponsiveImage } from "@/ui/responsive-image";
import { ArrowIcon, NavButton } from "./components";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex h-13 w-full items-center justify-between px-5 sm:h-40 sm:px-5">
      <LogoButton />
      <DesktopNav />
      <ContextMenu />
    </header>
  );
};

const LogoButton = () => (
  <button className="card group relative flex items-center gap-2 p-2 sm:gap-3 sm:py-3 sm:px-10">
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
    <div className="overlay" />
  </button>
);

const DesktopNav = () => (
  <nav className="hidden sm:flex sm:items-center sm:gap-2">
    <NavButton text="News" badge={3} padding="px-4 sm:px-5" />
    <NavButton text="Get out" icon={<ArrowIcon />} padding="px-6 sm:px-8" />
  </nav>
);

const ContextMenu = () => (
  <nav className="card flex w-13.5 flex-col gap-0.5 p-3 sm:hidden">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="h-0.5 bg-black" />
    ))}
  </nav>
);
