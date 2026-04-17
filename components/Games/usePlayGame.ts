"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Game } from "@/types/game";

export const usePlayGame = () => {
  const router = useRouter();

  const playGame = (game: Game): void => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      toast.info("Please sign in before you start playing.");
      const nextPath = `${window.location.pathname}${window.location.search}`;
      router.push(`/accounts/signin?next=${encodeURIComponent(nextPath)}`);
      return;
    }

    const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "";
    const playUrl = new URL(game.playLink, window.location.origin);
    playUrl.searchParams.set("to", accessToken);

    if (backendBaseUrl) {
      playUrl.searchParams.set("backend", backendBaseUrl);
    }

    window.open(playUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return playGame;
};
