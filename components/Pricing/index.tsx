"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Choose the perfect plan for your family. Access game experiences that deliver proven benefits in education, health, money tips, sport coaching, and creative arts.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-10">
              <div className="mb-6">
                <div className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  Starter
                </div>
                <h3 className="mb-2 text-5xl font-bold text-black dark:text-white">
                  Free
                </h3>
                <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                  🎮 Small Pack
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">Perfect for families starting their journey to healthy happiness and economic sustainability.</p>
              </div>

              <div className="mb-8 border-t-2 border-gray-100 pb-8 pt-6 dark:border-strokedark">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Basic Educational Games</span>
                  </li>
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Community Access</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600">
                    <svg className="mt-1 h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Premium Content</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600">
                    <svg className="mt-1 h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Priority Support</span>
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3.5 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Start Free
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover/btn:translate-x-1"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative overflow-hidden rounded-2xl border-2 border-primary bg-gradient-to-br from-white to-primary/5 p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl dark:border-primary dark:from-blacksection dark:to-primary/10 dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-10">
              <div className="absolute -right-12 top-8 rotate-45 bg-gradient-to-r from-primary to-secondary px-16 py-2 text-sm font-bold text-white shadow-lg">
                POPULAR
              </div>

              <div className="mb-6">
                <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-sm font-semibold text-white">
                  Most Popular
                </div>
                <h3 className="mb-2 text-5xl font-bold text-black dark:text-white">
                  $19{" "}
                  <span className="text-xl text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </h3>
                <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                  🌟 Medium Pack
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">Unlock more educational content and sport coaching features for your entire family.</p>
              </div>

              <div className="mb-8 border-t-2 border-primary/20 pb-8 pt-6 dark:border-primary/30">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">All Basic Features</span>
                  </li>
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Premium Educational Games</span>
                  </li>
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Sport Coaching Programs</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600">
                    <svg className="mt-1 h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Art & Music Creation</span>
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get Started Now
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover/btn:translate-x-1"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-secondary/30 hover:shadow-2xl dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-10">
              <div className="mb-6">
                <div className="mb-2 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
                  Pro
                </div>
                <h3 className="mb-2 text-5xl font-bold text-black dark:text-white">
                  $49{" "}
                  <span className="text-xl text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </h3>
                <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                  🚀 Large Pack
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">Complete access to all features including art & music creation, health tips, and premium support.</p>
              </div>

              <div className="mb-8 border-t-2 border-gray-100 pb-8 pt-6 dark:border-strokedark">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Everything in Medium</span>
                  </li>
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Art & Music Creation Tools</span>
                  </li>
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Health & Money Tips</span>
                  </li>
                  <li className="flex items-start gap-3 text-black dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Priority 24/7 Support</span>
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn flex w-full items-center justify-center gap-2 rounded-full border-2 border-secondary bg-transparent px-6 py-3.5 font-semibold text-secondary transition-all duration-300 hover:bg-secondary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Upgrade to Pro
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover/btn:translate-x-1"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive Support
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom Branding Strategy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
