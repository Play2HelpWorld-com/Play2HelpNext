"use client";
import Image from "next/image";
import Spotlight from "@/components/Games/spotlight";
import GameData from "@/components/Games/gameData";
import { GameInterface } from "@/types/game";

export default function Game() {
  const HandleLinkClick = async (game: GameInterface): Promise<void> => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert(
        "You are not logged in. Your score will not be saved. Please login to save your score.",
      );
    }
    const playLinkWithSession = `${game.playLink}?to=${encodeURIComponent(accessToken || "")}`;
    window.open(playLinkWithSession, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-4xl pb-16 text-center md:pb-24">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-primary/10 px-6 py-2 backdrop-blur-sm">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary"></span>
              <span className="text-sm font-semibold text-primary">Professional Development</span>
            </div>
            <h2 className="mb-6 font-nacelle animate-[gradient_6s_linear_infinite] bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-[length:200%_auto] bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:via-primary dark:to-white md:text-5xl lg:text-6xl">
              Master Skills Through Play
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Transform your career with games designed for skill-building, earning rewards, and professional growth. Start playing, start earning.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-8 lg:max-w-none lg:grid-cols-3">
            {GameData.map((game) => (
              <div
                key={game.id}
                className="group/card relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-[2px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-primary/40 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-primary after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-10 before:group-hover:opacity-100"
              >
                <div className="relative z-10 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-900 backdrop-blur-xl">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"></div>
                    {/* Play Button */}
                    <a
                      onClick={() => HandleLinkClick(game)}
                      className="absolute left-1/2 top-1/2 z-50 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-primary/90 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary group-hover/card:opacity-100"
                      aria-label="Play Game"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                        className="ml-1"
                      >
                        <path fill="currentColor" d="M8 5v14l11-7z" />
                      </svg>
                    </a>

                    {/* Image */}
                    <Image
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                      src={game.image}
                      width={350}
                      height={288}
                      alt={game.alt}
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      {game.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        {game.buttonText}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Free</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Spotlight>
          <div className="mt-12 flex justify-center"></div>
        </div>
      </div>
    </section>
  );
}
