import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper } from "./nav.styled";
import logo from "@/public/images/play2help_logo.webp";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeaderWrapper>
      <header>
        {/* Main Header */}
        <div
          id="navItemContainer"
          className="flex justify-between items-center"
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                id="logo"
                src={logo}
                alt="play2help logo"
                width={60}
                height={60}
                className="hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Navbar */}
          <nav className="hidden lg:flex space-x-8 font-medium">
            <Link
              href="http://play2helpup.free.nf/"
              target="_blank"
              className="nav-link"
            >
              Play
            </Link>
            <Link href="/highScorers" target="_blank" className="nav-link">
              Rewards
            </Link>
            <Link href="/charities" className="nav-link">
              Charities
            </Link>
            <Link href="/booster" className="nav-link">
              Booster
            </Link>

            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="nav-link">Join In</button>
              <div className="dropdown">
                <Link
                  href="https://www.youtube.com/channel/UC6PENDkMRLo8Or4-jjtJ3aw"
                  target="_blank"
                  className="dropdown-item"
                >
                  YouTube
                </Link>
                <Link
                  href="https://mauricebigmoflynn.wordpress.com/"
                  target="_blank"
                  className="dropdown-item"
                >
                  Blog
                </Link>
                <Link
                  href="https://www.eventbrite.com/e/full-community-meetup-tickets-346061678797"
                  target="_blank"
                  className="dropdown-item"
                >
                  Events
                </Link>
                <Link
                  href="https://www.surveymonkey.com/r/ZKM37SK"
                  className="dropdown-item"
                >
                  Votes
                </Link>
                <Link
                  href="https://www.facebook.com/Play2.HelpWorld/photos/a.210431825738952/5317915491657201/"
                  target="_blank"
                  className="dropdown-item"
                >
                  Job
                </Link>
              </div>
            </div>
            <Link href="/aboutUs" target="_blank" className="nav-link">
              Why
            </Link>
            <Link href="/contactUs" className="nav-link">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            title="Open Sidebar"
            type="button"
            className="lg:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <Menu className="text-gray-800" />
          </button>
        </div>

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <div className="sidebar">
            <div className="flex justify-between items-center mb-6">
              <Link href="/">
                <Image src={logo} alt="play2help logo" width={50} height={50} />
              </Link>
              <button
                title="Close Sidebar"
                type="button"
                className="text-3xl focus:outline-none"
                onClick={toggleSidebar}
              >
                <X />
              </button>
            </div>
            <nav className="space-y-4">
              <Link
                href="http://play2helpup.free.nf/"
                target="_blank"
                className="sidebar-link"
              >
                Play
              </Link>
              <Link
                href="/highScorers"
                target="_blank"
                className="sidebar-link"
              >
                Rewards
              </Link>
              <Link href="/charities" className="sidebar-link">
                Charities
              </Link>
              <Link href="/booster" className="sidebar-link">
                Booster
              </Link>
              <Link href="/aboutUs" target="_blank" className="sidebar-link">
                Why
              </Link>
              <Link href="/contactUs" className="sidebar-link">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </HeaderWrapper>
  );
}
