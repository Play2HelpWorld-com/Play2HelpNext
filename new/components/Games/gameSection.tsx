import Image from "next/image";
import Spotlight from "@/components/Games/spotlight";
import GameData from "@/components/Games/gameData";

export default function GameSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Tailored Workflows
              </span>
            </div>
            <h2 className="font-nacelle animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 text-3xl font-semibold text-transparent md:text-4xl">
              Map your product journey
            </h2>
            <p className="text-lg text-indigo-200/65">
              Simple and elegant interface to start collaborating with your team
              in minutes. It seamlessly integrates with your code and your
              favorite programming languages.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {GameData.map((workflow) => (
              <a
                key={workflow.id}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Arrow */}
                  <div
                    className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={9}
                      height={8}
                      fill="none"
                    >
                      <path
                        fill="#F4F4F5"
                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                      />
                    </svg>
                  </div>
                  {/* Image */}
                  <Image
                    className="inline-flex"
                    src={workflow.image}
                    width={350}
                    height={288}
                    alt={workflow.alt}
                  />
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {workflow.buttonText}
                        </span>
                      </span>
                    </div>
                    <p className="text-indigo-200/65">{workflow.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </Spotlight>
          <div className="mt-12 flex justify-center">
            <a
              href="#0"
              className="relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-gray-800 p-3 text-indigo-200 transition-all duration-500 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-lg before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-lg after:bg-gradient-to-br after:from-indigo-400/50 after:to-indigo-600/50 after:opacity-0 after:transition-opacity after:duration-500 hover:text-white hover:before:opacity-100 hover:after:opacity-100"
            >
              <span>View More Games</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                className="relative z-20"
              >
                <path
                  fill="currentColor"
                  d="m7 14-1.414-1.414 4.95-4.95H0V5.364h9.536L5.586.414 7 0l7 7-7 7Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
