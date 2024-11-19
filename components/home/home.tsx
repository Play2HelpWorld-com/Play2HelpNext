"use client";

import React from "react";
import ExtraReward from "./extraReward/extraReward";
import GameSection from "./games/games";
import TestimonialSection from "./testimonial/testimonial";
import NewGamesSection from "./newGames/newGames";

const Home = () => {
  return (
    <>
      <ExtraReward />
      <GameSection />
      <TestimonialSection />
      <NewGamesSection />
    </>
  );
};

export default Home;
