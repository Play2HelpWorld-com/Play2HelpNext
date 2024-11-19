import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="py-6 flex justify-center space-x-4 bg-gray-900">
        <Link href="http://play2health.free.nf/" target="_blank">
          <Image src="/site_logos/play2health.png" alt="Play2Health" width={45} height={45} />
        </Link>
        <Link href="http://play2work.free.nf/" target="_blank">
          <Image src="/site_logos/play2work.png" alt="Play2Work" width={45} height={45} />
        </Link>
        <Link href="http://play2live.free.nf/" target="_blank">
          <Image src="/site_logos/play2livewell.png" alt="Play2Live" width={45} height={45} />
        </Link>
        <Link href="http://play2learn.free.nf/" target="_blank">
          <Image src="/site_logos/play2learn.webp" alt="Play2Learn" width={45} height={45} />
        </Link>
      </div>

      <div className="bg-gradient-to-r from-teal-400 to-blue-500 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <FooterColumn title="Have Fun">
              <FooterLink href="http://play2helpyum.free.nf/" text="YUM" />
              <FooterLink href="http://play2helpup.free.nf/" text="UP" />
              <FooterLink href="/viewscore.php" text="Rewards" />
            </FooterColumn>
            <FooterColumn title="Join In">
              <FooterLink href="https://www.eventbrite.com/e/full-community-meetup-tickets-346061678797" text="Signup" />
              <FooterLink href="https://www.facebook.com/Play2.HelpWorld" text="Facebook" />
              <FooterLink href="https://www.youtube.com/channel/UC6PENDkMRLo8Or4-jjtJ3aw" text="Youtube" />
            </FooterColumn>
            <FooterColumn title="More Fun">
              <FooterLink href="https://mauricebigmoflynn.wordpress.com/" text="Blogs" />
              <FooterLink href="https://www.eventbrite.com/e/full-community-meetup-tickets-346061678797" text="Events" />
              <FooterLink href="https://www.surveymonkey.com/r/ZKM37SK" text="Votes" />
            </FooterColumn>
            <FooterColumn title="Who & Why">
              <FooterLink href="/aboutus.php" text="About Us" />
              <FooterLink href="/rules.php" text="Rules" />
              <FooterLink href="/privacy-policy.php" text="Privacy Policy" />
            </FooterColumn>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4">
        <p>Copyright © 2022 Play2World DAO & Licensed to Play2Help CIC</p>
      </div>
    </footer>
  );
};

// Type definitions for FooterColumn and FooterLink components
interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div>
    <h4 className="text-lg font-semibold mb-3">{title}</h4>
    <ul className="space-y-2">{children}</ul>
  </div>
);

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <li>
    <Link href={href} target="_blank" className="hover:underline">
      {text}
    </Link>
  </li>
);

export default Footer;
