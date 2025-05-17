import { Header } from "./components/header/header";
import { ProgressCard } from "./components/progress-bar/progress-bar";
import { MissionsCard } from "./components/missions-card/missions-card";
import { ReferralSystem } from "./components/referral-system/referral-system";
import { NavigationTabs } from "./components/navigation-tabs/navigation-tabs";
import { AvatarCard } from "./components/avatar-card/avatar-card";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
    <div className="sm:bg-[rgba(255,250,246)] sm:px-10">
      <Header />
      <hr className="sm:hidden" />

      <main className="max-w-[1200px] mt-13 sm:mt-0 pb-14.5 sm:pb-9 sm:mx-auto sm:pt-39.5 flex flex-col sm:bg-[rgba(255,250,246)] sm:gap-0.75">
        <ProgressCard />
        <hr className="block sm:hidden mb-5" />

        <div className="sm:grid grid-flow-col auto-cols-fr gap-x-1 gap-y-2 sm:mt-2">
          <NavigationTabs />
          <div className="px-5 sm:px-0 flex flex-col gap-0.75 shrink-1 grow-1 max-w-full row-start-2 col-start-1 col-span-5">
            <ReferralSystem />
            <MissionsCard />
          </div>
          <div className="row-start-2 col-start-6">
            <AvatarCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
