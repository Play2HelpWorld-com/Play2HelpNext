"use client";
import SidebarLink from "@/components/Docs/SidebarLink";
import { useSearchParams } from "next/navigation";

export default function Docs() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section") || "introduction"; // Default to 'Introduction'

  // Section content data
  const sectionContent: Record<string, string> = {
    introduction: `
      <h1>Welcome to Play2World</h1>
      <p>
          Play2World is your ultimate destination for fun, rewards, and making a positive impact.
          Whether you're here to play games, earn rewards, or contribute to charitable causes, Play2World has something for everyone.
          Dive in and explore the exciting opportunities that await you!
      </p>
    `,
    "what-is-play2world": `
      <h1>What Is Play2World?</h1>
      <p>Play2World is a fab new place online where you can play fun, free games, via almost any device you choose.
      On top of that you can claim rewards for yourself and grab other benefits too.
      On Play2WorkWorld.com it's all about the work and the $$$ you earn this for yourself.
      On Play2HelpWorld.com you can donate your rewards and $$$ to major charities.
      On Play2HealthWorld.com you grab rewards and also get help with your healthy lifestyle.
      On Play2LearnWorld.com you are earning and learning.
      And on Play2LiveWellWorld.com grab your rewards while improving your lived environment.
      The more you play the more rewards you earn - it's super simple, fun and always free!</p>
    `,
    "how-rewards-work": `
      <h1>How Do Rewards Work?</h1>
      <p>
      We aim to make the Rewards programme as simple and transparent as possible.
      You play fun, free games here and if you choose to join the Rewards programme your game scores on the game score leaderboards will be used to calculate your rewards.
      The more you play, the more rewards, it's that simple! For now the Rewards will be a fair share of the revenues that the games bring in, after costs are deducted, which we aim to keep to a minimum.
      We plan to be 100% transparent at all times with dashboards from well known independent companies showing how much the revenues & cost deductions are.
      Rewards payments will be made on a monthly basis via your selected payment channels eg Paypal. You can also donate your rewards to top charities.
      We list all the charities on the website with direct links to them there via a 100% independent charity donation management company.
      That way you can click and verify all the donations that we are able to make! We are always looking to improve so do let us know if you have suggestions for making the Rewards programme even better.
      </p>
    `,
    "why-do-we-do-this": `
      <h1>Why Do We Do This?</h1>
      <p>
      Given all that's going on in the world today we think it's important to give back and help others, especially those less fortunate.
      We also love fun, free casual games that we can play anytime on almost any device!
      So one day we decided to combine those two things and created Play2.Help World.
      We are a small community of friendly folk who really believe in this initiative and are working passionately to make it a reality.
      We welcome all help and in fact you can see on our website different areas where more people can help support this in various ways.
      So if you feel the same jump in and play the games then contact us on social media to find out more!
      </p>
    `,
  };

  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          {/* Sidebar */}
          <div className="w-full px-4 lg:w-1/4">
            <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
              <ul className="space-y-2">
                <SidebarLink />
              </ul>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full px-4 lg:w-3/4">
            <div
              className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              dangerouslySetInnerHTML={{
                __html: sectionContent[section] || "Section not found.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
