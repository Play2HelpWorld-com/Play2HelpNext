"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-14 pt-28 sm:pb-16 md:pt-36 lg:pb-20 xl:pb-25 xl:pt-46">
        <div className="">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full md:w-1/2">
              <h4 className="mb-4 text-base font-semibold text-primary dark:text-white sm:text-lg">
                Transform Lives Through Gaming
              </h4>
              <h1 className="mb-5 max-w-full text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl xl:text-hero">
                Play, Learn & Grow with
                <span className="relative mt-1 inline-block sm:mx-2 sm:mt-0 before:absolute before:bottom-1.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-gradient-to-r before:from-titlebg before:to-primary/30 dark:before:bg-titlebgdark sm:before:bottom-2.5 sm:before:h-4">
                  weplay2help
                </span>
              </h1>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Experience game-based learning that delivers proven benefits in education, health, 
                financial literacy, sport coaching, and creative arts. Join thousands of families 
                achieving healthy happiness and economic sustainability through play.
              </p>

              <div className="mt-8 sm:mt-10">
                <a
                  href="#games"
                  aria-label="go to games section"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl dark:from-btndark dark:to-btndark/80 sm:w-auto sm:px-8"
                >
                  Start Playing Free
                  <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:items-center">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-500 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Free Forever. No Credit Card. Instant Access.</span>
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative w-full">
                  <Image
                    className="shadow-solid-l dark:hidden w-auto"
                    src="/images/hero/hero-light.jpg"
                    alt="Hero"
                    width={1300}
                    height={1244}
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block  w-auto"
                    src="/images/hero/hero-light.jpg"
                    alt="Hero"
                    width={1200}
                    height={1244}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
