import styled from "styled-components";
export const ExtraRewardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #091428;
  padding: 2rem;
  gap: 2rem;

  /* Large Card */
  .large-card {
    position: relative;
    width: 100%;
    height: 50vh;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .background-image {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .card-content {
      position: relative;
      z-index: 1;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      color: white;
      padding: 2rem;
      text-align: center;
      width: 100%;
      box-sizing: border-box;

      h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #ff6a00;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #e6e6e6;
      }

      ul {
        list-style: none;
        padding: 0;
        margin-bottom: 1rem;

        li {
          font-size: 1rem;
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
        font-size: 1.2rem;
        padding: 1rem 2rem;
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
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;

    .small-card {
      background: linear-gradient(145deg, #091428, #111119);
      border-radius: 1rem;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease;
      width: calc(50% - 1rem);

      &:hover {
        transform: scale(1.03);
      }

      .content {
        flex: 1;
        margin-right: 1rem;

        h1 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #ff6a00;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
          color: #dcdcdc;
          margin-bottom: 0.5rem;
        }

        .explore-link {
          display: inline-block;
          background-color: #ff6a00;
          color: white;
          font-size: 1rem;
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
        img {
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .large-card {
      height: 40vh;

      .card-content {
        h1 {
          font-size: 2rem;
        }

        h2 {
          font-size: 1rem;
        }

        ul li {
          font-size: 0.9rem;
        }
      }
    }

    .small-cards {
      .small-card {
        width: 100%;
        flex-direction: column;

        .content {
          margin-right: 0;
          text-align: center;
        }

        .reward-image {
          margin-top: 1rem;
        }
      }
    }
  }
`;
