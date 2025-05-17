"use client";

import Link from "next/link";
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
    title: (
      <span>
        post on X mentioning
        <span className="text-[rgba(72,145,255)] ml-1 inline-block mt-1">
          @REALMANmemecoin
        </span>
      </span>
    ),
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
    title: (
      <p>
        Subscribe to the official
        <Link
          className="text-[rgba(72,145,255)] underline leading-none ml-1 inline-block mt-1"
          href={""}
        >
          Realman X account
        </Link>
      </p>
    ),
    rewardAmount: 50,
    footer: {
      type: "input",
      onSubmit: console.log,
      placeholder: "Your X login",
      inputType: "small",
    },
  },
];

export const MissionsCard = () => (
  <div className="sm:border border-solid bg-white rounded-[8px] pt-9 pb-5 sm:pb-7.5 sm:px-7.5">
    <div className="flex justify-between gap-4.5">
      <div className="text-[32px] leading-none font-bold">Missions</div>
      <div className="text-[12px] sm:text-[16px] text-[rgba(1,1,1,0.35)] text-right tracking-[0.04em]">
        *Each user must register and make a purchase to be considered a valid
        referral.
      </div>
    </div>
    <div className="flex flex-col gap-2 mt-4 sm:mt-5">
      {MISSIONS.map((mission) => (
        <MissionCard key={mission.id} {...mission} />
      ))}
    </div>
  </div>
);
