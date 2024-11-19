import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 16px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    ),
    url("/images/Website Banner_Play2Help_Desktop.png");
  background-size: cover;
  background-position: center;
  height: 70vh;

  #navItemContainer {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 16px;
    backdrop-filter: blur(10px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    color: #333;
    transition: color 0.3s, transform 0.3s;
    &:hover {
      color: #ff5722;
      transform: scale(1.05);
    }
  }

  .dropdown {
    display: none;
    position: absolute;
    flex-direction: column; /* Ensures column layout */
    align-items: flex-start; /* Aligns items to the left */
    top: 100%;
    left: 0;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 8px 0;
    z-index: 1000;
    width: 200px; /* Adjust width as needed */

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
    display: flex; /* Makes the dropdown visible */
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background: white;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 24px;
    overflow-y: auto;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
  }

  .sidebar-link {
    display: block;
    font-size: 1.2rem;
    color: #333;
    font-weight: 500;
    padding: 10px 0;
    border-bottom: 1px solid #eaeaea;
    &:hover {
      color: #ff5722;
    }
  }
`;
