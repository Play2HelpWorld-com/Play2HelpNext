"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-xl dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-12"
            >
              <div className="mb-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>Get In Touch</span>
                </div>
                <h2 className="mb-3 text-4xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                  Let's Connect & Grow Together
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Have questions about our game experiences? Want to learn more about how we're helping families achieve healthy happiness? We'd love to hear from you!
                </p>
              </div>

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:gap-8">
                  <div className="group relative w-full lg:w-1/2">
                    <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-4 pl-8 pr-4 font-medium text-black placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-strokedark dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                    />
                  </div>

                  <div className="group relative w-full lg:w-1/2">
                    <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-4 pl-8 pr-4 font-medium text-black placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-strokedark dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:gap-8">
                  <div className="group relative w-full lg:w-1/2">
                    <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-4 pl-8 pr-4 font-medium text-black placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-strokedark dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                    />
                  </div>

                  <div className="group relative w-full lg:w-1/2">
                    <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-primary">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Phone number (optional)"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-4 pl-8 pr-4 font-medium text-black placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-strokedark dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="group relative mb-8 flex">
                  <div className="pointer-events-none absolute left-0 top-4 text-gray-400 transition-colors group-focus-within:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <textarea
                    placeholder="Your message... Tell us how we can help!"
                    rows={5}
                    className="w-full border-b-2 border-gray-200 bg-transparent py-4 pl-8 pr-4 font-medium text-black placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-strokedark dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700">
                      <svg
                        className="opacity-0 peer-checked:group-[]:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-[425px] cursor-pointer select-none pl-5"
                    >
                      By clicking Checkbox, you agree to use our “Form” terms
                      And consent cookie usage in browser.
                    </label>
                  </div>

                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <div className="mb-8">
                <h2 className="mb-3 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                  Contact Info
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Reach out to our team at themagicworlds.org
                </p>
              </div>

              <div className="space-y-6">
                <div className="group rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl dark:border-strokedark dark:bg-blacksection">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Our Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">United Kingdom</p>
                </div>

                <div className="group rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl dark:border-strokedark dark:bg-blacksection">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/70">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Email Address
                  </h3>
                  <p className="break-all text-gray-600 dark:text-gray-300">
                    <a href="mailto:mflynn1999@gmail.com" className="transition-colors hover:text-primary">mflynn1999@gmail.com</a>
                  </p>
                </div>

                <div className="group rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl dark:border-strokedark dark:bg-blacksection">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-meta to-meta/70">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a href="tel:+009XXXXX0000843" className="transition-colors hover:text-primary">+009 XXXXX 0000 843</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
