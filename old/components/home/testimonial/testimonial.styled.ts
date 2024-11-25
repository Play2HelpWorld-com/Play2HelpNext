import styled from "styled-components";

export const TestimonialSectionWrapper = styled.section`
  background-color: #091428; /* Dark theme */
  padding: 4rem 2rem;
  color: #fff;
  height: 100vh;
  width: 100vw;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    .header {
      text-align: center;
      margin-bottom: 2rem;

      h2 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #fff;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .testimonial-video {
      display: flex;
      justify-content: center;
      align-items: center;

      .video-wrapper {
        max-width: 800px;
        width: 100%;
        background-color: #222; /* Slightly lighter than the section background */
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .video {
          display: block;
          width: 100%;
          border-radius: 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .container {
      padding: 0;
    }

    .header h2 {
      font-size: 2rem;
    }

    .testimonial-video {
      .video-wrapper {
        max-width: 100%;
      }
    }
  }
`;
