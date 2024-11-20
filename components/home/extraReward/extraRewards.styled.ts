import styled from "styled-components";
export const ExtraRewardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  // background-color: #091428;
  background-color: transparent;
  padding: 4rem 2rem;

  .main-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff6a00;
    margin-bottom: 2rem;
    text-align: center;
  }

  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    max-width: 1920px;
    padding: 0 1rem;
  }

  /* Large Card */
  .large-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #1a1a2e;
    // flex: 3;
    width: 100%;
    max-width: 800px;
    height: 100%;
    position: relative;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);

    .background-image {
      width: 100%;
      height: 100%;
      max-height: 560px;
      object-fit: fill;
    }

    .card-content {
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      color: white;
      padding: 2rem;
      text-align: center;

      h1 {
        font-size: clamp(2rem, 2vw, 3rem);
        font-weight: bold;
        color: #ff6a00;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        margin-bottom: 1.5rem;
        color: #e6e6e6;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0;

        li {
          font-size: clamp(0.9rem, 1vw, 1rem);
          color: #cfcfcf;
          margin: 0.5rem 0;

          strong {
            color: #ff6a00;
          }
        }
      }

      .join-now {
        display: inline-block;
        background-color: #ff6a00;
        color: white;
        font-size: clamp(0.9rem, 1vw, 1rem);
        padding: 0.8rem 1.5rem;
        border-radius: 2rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #ff8c34;
        }
      }
    }
  }

  /* Small Cards */
  .small-cards {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    .small-card {
      background: linear-gradient(145deg, #091428, #111119);
      border-radius: 1rem;
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: center;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.01);
      }

      .content {
        flex: 1;

        h1 {
          font-size: clamp(1rem, 1.2vw, 1.5rem);
          font-weight: bold;
          color: #ff6a00;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: clamp(0.8rem, 1vw, 1rem);
          color: #dcdcdc;
          margin-bottom: 0.5rem;
        }

        .explore-link {
          display: inline-block;
          background-color: #ff6a00;
          color: white;
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #ff8c34;
          }
        }
      }

      .reward-image {
        flex-shrink: 0;
        margin-left: 1rem;

        img {
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 1440px) {
    .content-wrapper {
      flex-direction: column;
      align-items: center;
      padding: 2rem 0;
    }

    .large-card {
      width: 100%;
    }

    .small-cards {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .small-card {
      flex-direction: column;
      text-align: center;

      .reward-image {
        margin: 1rem 0 0 0;
      }
    }
  }

  @media (max-width: 480px) {
    .card-content {
      padding: 1.5rem;

      h1 {
        font-size: clamp(1.5rem, 4vw, 2rem);
      }

      h2 {
        font-size: clamp(0.8rem, 1vw, 1rem);
      }

      ul li {
        font-size: clamp(0.8rem, 1vw, 0.9rem);
      }
    }
  }
`;
