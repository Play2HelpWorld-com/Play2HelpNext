"use client";

import Image from "next/image";
import { Game } from "@/types/game";
import { usePlayGame } from "@/components/Games/usePlayGame";

type GameCardProps = {
  game: Game;
  compact?: boolean;
};

export default function GameCard({ game, compact = false }: GameCardProps) {
  const playGame = usePlayGame();

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-solid-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection">
      <div className="relative">
        <Image
          className={`w-full object-cover ${compact ? "h-52" : "h-60"}`}
          src={game.image}
          width={430}
          height={300}
          alt={game.alt}
        />
        <div className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm dark:bg-black/90">
          {game.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="break-words text-xl font-bold text-black dark:text-white sm:text-2xl">
              {game.title}
            </h3>
            <p className="mt-1 break-words text-sm font-medium text-primary">
              Supports {game.charity}
            </p>
          </div>
          <span className="shrink-0 rounded-md bg-zumthor px-3 py-1 text-xs font-semibold text-black dark:bg-hoverdark dark:text-white sm:mt-1">
            {game.playTime}
          </span>
        </div>

        <p className="mb-4 text-sm leading-6 text-waterloo dark:text-manatee">
          {game.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {game.tags.slice(0, compact ? 2 : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-strokedark dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => playGame(game)}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primaryho focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-blacksection"
          aria-label={`Play ${game.title}`}
        >
          {game.buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            fill="none"
            viewBox="0 0 14 14"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="m8.48 1.81 4.72 4.72a.67.67 0 0 1 0 .94l-4.72 4.72-.94-.94 3.58-3.58H1.27V6.33h9.85L7.54 2.75l.94-.94Z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
