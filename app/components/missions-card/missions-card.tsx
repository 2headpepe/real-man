import { Mission, MissionCard } from "./mission-card/mission-card";

const MISSIONS: Mission[] = [
  {
    id: 1,
    title: "Create YouTube video",
    rewardAmount: 5000,
    footer: {
      type: "input",
      onSubmit: console.log,
      placeholder: "Link",
    },
    type: "primary",
    hintText: "Create video on youtube to achieve this",
  },
  {
    id: 2,
    title: "Invite* 1 person through your referral link",
    rewardAmount: 100,
    type: "completed",
  },
  {
    id: 3,
    title: "Invite* 3 person through your referral link",
    rewardAmount: 300,
    footer: {
      type: "progress",
      current: 1,
      target: 3,
    },
  },
  {
    id: 4,
    title: "Invite* 10 person through your referral link",
    rewardAmount: 1000,
    footer: {
      type: "progress",
      current: 1,
      target: 10,
    },
  },
  {
    id: 5,
    title: "post on X mentioning @REALMANmemecoin",
    rewardAmount: 50,
    footer: {
      type: "input",
      onSubmit: console.log,
      placeholder: "Link",
    },
    hintText: "post on X mentioning @REALMANmemecoin to achieve this",
  },
  {
    id: 6,
    title: "Subscribe to the official Realman X account",
    rewardAmount: 50,
    footer: {
      type: "input",
      onSubmit: console.log,
      placeholder: "Your X login",
    },
    hintText: "post on X mentioning @REALMANmemecoin to achieve this",
  },
];

export const MissionsCard = () => (
  <div className="sm:border border-solid border-border-primary bg-white rounded pt-9 pb-7.5 sm:px-7.5">
    <div className="flex justify-between gap-4.5">
      <div className="text-static-section-title leading-none">Missions</div>
      <div className="text text-text-secondary text-right">
        *Each user must register and make a purchase to be considered a valid
        referral.
      </div>
    </div>
    <div className="flex flex-col gap-2 mt-5">
      {MISSIONS.map((mission) => (
        <MissionCard key={mission.id} {...mission} />
      ))}
    </div>
  </div>
);
