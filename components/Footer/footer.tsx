import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FooterContainer,
  LogoContainer,
  LogoLink,
  GradientSection,
  FooterGrid,
  FooterColumnTitle,
  FooterLinkList,
  FooterLinkItem,
  FooterLinkStyled,
  FooterBottom,
} from "./footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      {/* Logo section */}
      <LogoContainer>
        <LogoLink href="http://play2health.free.nf/" target="_blank">
          <Image
            src="/site_logos/play2health.png"
            alt="Play2Health"
            width={45}
            height={45}
          />
        </LogoLink>
        <LogoLink href="http://play2work.free.nf/" target="_blank">
          <Image
            src="/site_logos/play2work.png"
            alt="Play2Work"
            width={45}
            height={45}
          />
        </LogoLink>
        <LogoLink href="http://play2live.free.nf/" target="_blank">
          <Image
            src="/site_logos/play2livewell.png"
            alt="Play2Live"
            width={45}
            height={45}
          />
        </LogoLink>
        <LogoLink href="http://play2learn.free.nf/" target="_blank">
          <Image
            src="/site_logos/play2learn.webp"
            alt="Play2Learn"
            width={45}
            height={45}
          />
        </LogoLink>
      </LogoContainer>

      {/* Gradient Section with Footer Columns */}
      <GradientSection>
        <FooterGrid>
          <FooterColumn title="Have Fun">
            <FooterLink href="http://play2helpyum.free.nf/" text="YUM" />
            <FooterLink href="http://play2helpup.free.nf/" text="UP" />
            <FooterLink href="/viewscore.php" text="Rewards" />
          </FooterColumn>
          <FooterColumn title="Join In">
            <FooterLink
              href="https://www.eventbrite.com/e/full-community-meetup-tickets-346061678797"
              text="Signup"
            />
            <FooterLink
              href="https://www.facebook.com/Play2.HelpWorld"
              text="Facebook"
            />
            <FooterLink
              href="https://www.youtube.com/channel/UC6PENDkMRLo8Or4-jjtJ3aw"
              text="Youtube"
            />
          </FooterColumn>
          <FooterColumn title="More Fun">
            <FooterLink
              href="https://mauricebigmoflynn.wordpress.com/"
              text="Blogs"
            />
            <FooterLink
              href="https://www.eventbrite.com/e/full-community-meetup-tickets-346061678797"
              text="Events"
            />
            <FooterLink
              href="https://www.surveymonkey.com/r/ZKM37SK"
              text="Votes"
            />
          </FooterColumn>
          <FooterColumn title="Who & Why">
            <FooterLink href="/aboutus.php" text="About Us" />
            <FooterLink href="/rules.php" text="Rules" />
            <FooterLink href="/privacy-policy.php" text="Privacy Policy" />
          </FooterColumn>
        </FooterGrid>
      </GradientSection>

      {/* Footer Bottom */}
      <FooterBottom>
        <p>Copyright © 2022 Play2World DAO & Licensed to Play2Help CIC</p>
      </FooterBottom>
    </FooterContainer>
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div>
    <FooterColumnTitle>{title}</FooterColumnTitle>
    <FooterLinkList>{children}</FooterLinkList>
  </div>
);

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <FooterLinkItem>
    <Link href={href} passHref>
      <FooterLinkStyled target="_blank">{text}</FooterLinkStyled>
    </Link>
  </FooterLinkItem>
);

export default Footer;
