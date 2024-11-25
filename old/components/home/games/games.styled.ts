import styled from "styled-components";

export const GameSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #091428; /* Dark theme */
  color: #fff;

  .header {
    width: 90%;
    text-align: left;
    margin-bottom: 2rem;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: #fff;
    }

    p {
      font-size: 1.125rem;
      color: #bbb;
      margin-top: 0.5rem;
      line-height: 1.6;
    }
  }

  .game-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    .game-card {
      display: flex;
      flex-direction: row; /* Card layout with image on the right */
      align-items: center;
      background: #222;
      border-radius: 1rem;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      width: 45%; /* Two cards per row */
      height: 350px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }

      .image-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      .content {
        position: absolute;
        width: 100%;
        padding: 1rem;
        text-align: left;

        h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .play-share-btn {
          display: inline-block;
          background-color: #0070f3;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 1rem;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.9rem;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #0056b3;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .game-list {
      flex-direction: column;
      align-items: center;
    }

    .game-card {
      width: 90%;
      flex-direction: column; /* Stack content and image vertically on smaller screens */
    }

    .image-wrapper {
      width: 100%;
      height: 50%;
    }

    .content {
      width: 100%;
    }
  }
`;
