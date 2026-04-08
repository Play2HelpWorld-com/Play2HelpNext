"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className=" ">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light.jpg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-light.jpg"
                alt="About"
                className="hidden dark:block"
                width={588}
                height={526.5}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-semibold uppercase tracking-wide text-primary dark:text-white">
                <span className="mb-4 mr-3 inline-flex rounded-full bg-gradient-to-r from-primary to-primary/80 px-5 py-1.5 text-xs font-bold uppercase text-white shadow-lg">
                  NEW
                </span>{" "}
                Game-Powered Learning
              </span>
              <h2 className="relative mb-6 text-4xl font-bold leading-tight text-black dark:text-white xl:text-hero">
                Unlock Your Family&apos;s
                <span className="relative mx-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-4 before:w-full before:bg-gradient-to-r before:from-titlebg before:to-primary/30 dark:before:bg-titlebgdark">
                  Full Potential
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Discover a revolutionary platform where gaming meets real-world benefits. 
                Earn rewards while developing skills in education, health, finance, sports, 
                and creative arts—all designed to promote healthy happiness and economic sustainability.
              </p>

              <div className="mt-8 flex items-center gap-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent p-5 transition-all hover:from-primary/10 dark:from-primary/10">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-lg">
                  <p className="text-2xl font-bold text-white">
                    01
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold text-black dark:text-white">
                    Join & Get Welcome Bonus
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Start your journey with instant rewards and unlock premium features.</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent p-5 transition-all hover:from-primary/10 dark:from-primary/10">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/70 shadow-lg">
                  <p className="text-2xl font-bold text-white">
                    02
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold text-black dark:text-white">
                    Play, Learn & Earn
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Engage with educational games, health activities, and creative challenges.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-semibold uppercase tracking-wide text-primary dark:text-white">
                <span className="mb-4 mr-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-meta to-meta/80 px-5 py-1.5 text-xs font-bold uppercase text-white shadow-lg">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Give Back
                </span>{" "}
                Support Charitable Causes
              </h4>
              <h2 className="relative mb-6 text-4xl font-bold leading-tight text-black dark:text-white xl:text-hero">
                Play with
                <span className="relative mx-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-4 before:w-full before:bg-gradient-to-r before:from-titlebg2 before:to-secondary/30 dark:before:bg-titlebgdark">
                  Purpose
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Every game you play contributes to global causes. Support education, health, 
                environmental conservation, and humanitarian efforts while enjoying engaging 
                gameplay experiences that benefit your family and communities worldwide.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Learn More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/p2hCharity.jpg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/p2hCharity.jpg"
                alt="About"
                className="hidden dark:block"
                width={588}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
