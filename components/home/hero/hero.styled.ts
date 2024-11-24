import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

const textAnimation = keyframes`
  0% {
    transform: scale(1);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    transform: scale(1.1);
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  100% {
    transform: scale(1);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  top: -97px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  text-align: left;
  color: white;
  z-index: 10;
  max-width: 600px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #ff4500;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
    animation: ${textAnimation} 2s infinite;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #ffd700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #dcdcdc;
  }
`;

export const PlayButton = styled.button`
  background-color: #ff4500;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  animation: ${pulseAnimation} 1.5s infinite;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff6347;
    box-shadow: 0 8px 16px rgba(255, 99, 71, 0.8);
  }
`;
