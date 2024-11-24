import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #121212; /* Dark background */
  color: #f1f1f1; /* Light text color */
`;

export const LogoContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #1c1c1c; /* Slightly lighter dark background */
`;

export const LogoLink = styled.a`
  display: inline-block;
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const GradientSection = styled.div`
  background: linear-gradient(
    to right,
    #00bcd4,
    #8e2de2
  ); /* Bright cyan to purple gradient */
  padding: 3rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

export const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    text-align: left;
  }
`;

export const FooterColumnTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  color: #e3e3e3; /* Light gray color */
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterLinkItem = styled.li`
  margin-bottom: 0.8rem;
`;

export const FooterLinkStyled = styled.a`
  text-decoration: none;
  color: #e3e3e3;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4; /* Highlight color on hover */
  }
`;

export const FooterBottom = styled.div`
  background-color: #1c1c1c;
  text-align: center;
  padding: 1.5rem 0;
  font-size: 0.875rem;
  color: #a9a9a9;
  border-top: 2px solid #333;
`;

export const SocialLinksContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const SocialIconLink = styled.a`
  color: #e3e3e3;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4; /* Highlight color on hover */
  }
`;
