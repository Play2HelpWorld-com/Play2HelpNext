"use client";
import GameData from "@/components/Games/gameData";
import GameCard from "@/components/Games/GameCard";

export default function GameSection() {
  return (
    <section
      id="games"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent py-12 sm:py-16 md:scroll-mt-28 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            <div className="mb-5 inline-flex items-center gap-3 rounded-lg bg-primary/10 px-5 py-2 sm:px-6">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary"></span>
              <span className="text-sm font-semibold text-primary">Featured Games</span>
            </div>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Pick a game and play for good
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-waterloo dark:text-manatee sm:text-lg">
              Browse quick games by play style, choose a cause, and sign in before launch so your score is saved.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {GameData.slice(0, 6).map((game) => (
              <GameCard key={game.id} game={game} compact />
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:mt-14 md:mt-16">
            <a
              href="/games"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primaryho hover:shadow-xl hover:shadow-primary/30 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              <span className="relative z-10">Discover More Games</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="none"
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="M9 0L8.293.707 13.586 6H0v2h13.586l-5.293 5.293L9 14l7-7-7-7z"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
