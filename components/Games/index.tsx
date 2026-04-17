"use client";
import { useMemo, useState } from "react";
import GameData from "@/components/Games/gameData";
import GameCard from "@/components/Games/GameCard";

export default function Game() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(GameData.map((game) => game.category)))],
    [],
  );

  const filteredGames = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return GameData.filter((game) => {
      const matchesCategory =
        activeCategory === "All" || game.category === activeCategory;
      const searchableText = [
        game.title,
        game.description,
        game.category,
        game.charity,
        ...game.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [activeCategory, searchTerm]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-12 md:pb-16">
          <div className="mx-auto max-w-4xl pb-8 text-center sm:pb-10">
            <div className="mb-5 inline-flex items-center gap-3 rounded-lg bg-primary/10 px-5 py-2">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm font-semibold text-primary">Game Library</span>
            </div>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Find a game and start playing
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-waterloo dark:text-manatee sm:text-lg">
              Search by game name, cause, or play style. Sign in once, then launch any game and keep your score connected to your account.
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-slate-200 bg-white p-4 shadow-solid-5 dark:border-strokedark dark:bg-blacksection md:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <label className="relative block w-full lg:max-w-md">
                <span className="sr-only">Search games</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search games, causes, or tags"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-waterloo focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-strokedark dark:bg-black dark:text-white"
                />
              </label>

              <p className="text-sm font-medium text-waterloo dark:text-manatee lg:text-right">
                {filteredGames.length} of {GameData.length} games
              </p>
            </div>

            <div className="no-scrollbar -mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-zumthor dark:bg-hoverdark dark:text-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center dark:border-strokedark dark:bg-blacksection">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                No games found
              </h2>
              <p className="mt-2 text-waterloo dark:text-manatee">
                Try a different search term or choose another category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
