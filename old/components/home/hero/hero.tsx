"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import hero1 from "@/public/images/hero/hero1.png";
import hero2 from "@/public/images/hero/hero2.png";
import hero3 from "@/public/images/hero/hero3.png";
import hero4 from "@/public/images/hero/hero4.png";
import hero5 from "@/public/images/hero/hero5.png";

import {
  HeroContainer,
  BackgroundImage,
  HeroContent,
  PlayButton,
} from "./hero.styled";

// Preload hero images
const heroImages = [hero1, hero2, hero3, hero4, hero5];

// Game Data
const gameData = [
  {
    title: "Mario Go!",
    subtitle: "Act 2 Out Now",
    description:
      "Jinx’s attack on the Council sets the stage for a dire escalation of the conflict between Piltover and Zaun. The stakes have never been higher.",
  },
  {
    title: "Galaxy Raiders",
    subtitle: "Cosmic Battles Begin",
    description:
      "Explore the far reaches of the universe and engage in thrilling space combat. Choose your side in the intergalactic war!",
  },
  {
    title: "Mystic Quest",
    subtitle: "The Crystal Awakens",
    description:
      "Embark on a journey to save the enchanted kingdom and uncover the secrets of the ancient crystal.",
  },
  {
    title: "Robo Clash 3000",
    subtitle: "Machines vs. Humanity",
    description:
      "In a post-apocalyptic world, take control of a powerful mech and fight for the survival of mankind.",
  },
  {
    title: "Dragon Legends",
    subtitle: "Rise of the Fire King",
    description:
      "Tame mighty dragons and reclaim your throne in this epic fantasy adventure.",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = heroImages.map((img) => {
        return new Promise<void>((resolve) => {
          const image = new window.Image();
          image.src = img.src;
          image.onload = () => resolve();
        });
      });
      await Promise.all(promises);
      setIsImageLoaded(true);
    };

    preloadImages();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setCurrentGameIndex((prevIndex) => (prevIndex + 1) % gameData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentGame = gameData[currentGameIndex];

  return (
    <HeroContainer>
      <BackgroundImage>
        {isImageLoaded && (
          <Image
            src={heroImages[currentImageIndex]}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        )}
      </BackgroundImage>
      <HeroContent>
        <h1>{currentGame.title}</h1>
        <h3>{currentGame.subtitle}</h3>
        <p>{currentGame.description}</p>
        <PlayButton>Play Now</PlayButton>
      </HeroContent>
    </HeroContainer>
  );
}
