import styled from "styled-components";

export const NewGamesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #091428;
  padding: 2rem;
  gap: 2rem;
`;

// Wrapper for each card container
export const CardWrapper = styled.div<{ $imgSrc: string }>`
  position: relative;
  width: 100%;
  height: 300px; /* Adjust the height to fit your design */
  background-image: url(${(props) => props.$imgSrc});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover .card-content {
    opacity: 1;
  }
`;

// The overlay content (title and button)
export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent overlay */
  padding: 20px;
  text-align: left;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const GameTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PlayButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #007bff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;

export const DescriptionList = styled.ul`
  color: #d1d1d1;
  font-size: 0.9rem;
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
  text-align: left;
`;

export const DescriptionItem = styled.li`
  margin-bottom: 5px;
`;
