import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.6)
    ),
    url("/images/riot_background.jpg");
  background-size: cover;
  background-position: center;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .nav-link {
    color: white;
    font-size: 1.1rem;
    position: relative;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #e63946;
      transform: scale(1.1);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #e63946;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  .dropdown {
    display: none;
    position: absolute;
    flex-direction: column; /* Ensures column layout */
    align-items: flex-start; /* Aligns items to the left */
    top: 100%;
    left: -50px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 8px 0;
    z-index: 1000;
    width: 100px; /* Adjust width as needed */

    .dropdown-item {
      display: block;
      width: 100%; /* Ensures items take the full width of the dropdown */
      padding: 10px 16px;
      color: #333;
      font-size: 0.9rem;
      font-weight: 500;
      text-align: left;
      white-space: nowrap; /* Prevents text wrapping */
      border-bottom: 1px solid #eaeaea; /* Adds a subtle separator */
      transition: background-color 0.3s, color 0.3s;

      &:last-child {
        border-bottom: none; /* Removes border from the last item */
      }

      &:hover {
        background: #f9f9f9;
        color: #ff5722;
      }
    }
  }

  .group:hover .dropdown {
    display: flex;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background: #111;
    padding: 24px;
    z-index: 100;
    overflow-y: auto;
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;

    .sidebar-link {
      display: block;
      font-size: 1.2rem;
      color: white;
      padding: 12px 0;
      border-bottom: 1px solid #333;
      &:hover {
        color: #e63946;
      }
    }
  }

  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;

    .hero-title {
      font-size: 3rem;
      font-weight: bold;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      margin-top: 16px;
    }

    .cta-button {
      margin-top: 24px;
      padding: 12px 24px;
      font-size: 1rem;
      background: #e63946;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #ff6f61;
      }
    }
  }
`;
