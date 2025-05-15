"use client";

import { Header } from "./components/header/header";
import { ProgressCard } from "./components/progress-bar/progress-bar";
import { MissionsCard } from "./components/missions-card/missions-card";
import { ReferralSystem } from "./components/referral-system/referral-system";
import { NavigationTabs } from "./components/navigation-tabs/navigation-tabs";
import { AvatarCard } from "./components/avatar-card/avatar-card";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
    <div className="sm:bg-[rgba(255,250,246)]">
      <Header />
      <hr className="sm:hidden mt-13" />

      <main className="sm:bg-[rgba(255,250,246)] sm:pt-40 sm:mx-15 xl:mx-24 xxl:mx-48 flex flex-col gap-1">
        <ProgressCard />
        <hr className="block sm:hidden mb-4" />

        <NavigationTabs />
        <div className="flex gap-1 items-start min-w-0">
          <div className="px-4 sm:px-0 flex flex-col gap-1 shrink-1 grow-1 max-w-full">
            <ReferralSystem />
            <MissionsCard />
          </div>
          <AvatarCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
