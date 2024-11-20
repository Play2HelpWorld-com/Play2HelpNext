import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper } from "./nav.styled";
import logo from "@/public/images/play2help_logo.webp";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isscrolled, setisscrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setisscrolled(true);
      } else {
        setisscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper $isscrolled={isscrolled}>
      <header>
        <div
          className={`navbar-container flex justify-between items-center ${
            isscrolled ? "scrolled" : ""
          }`}
        >
          {/* Left Section: Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="logo">
              <Image src={logo} alt="Play2Help Logo" width={80} height={80} />
            </Link>
            <nav className="hidden lg:flex space-x-8 font-medium">
              <Link href="/play" className="nav-link">
                PLAY
              </Link>
              <div className="relative group">
                <button className="nav-link">WHO WE ARE</button>
                <div className="dropdown">
                  <Link href="/charities" className="dropdown-item">
                    Charities
                  </Link>
                  <Link href="/aboutUs" className="dropdown-item">
                    Why
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="nav-link">WORK WITH US</button>
                <div className="dropdown">
                  <Link href="/highScorers" className="dropdown-item">
                    Rewards
                  </Link>
                  <Link href="/booster" className="dropdown-item">
                    Boosters
                  </Link>
                  <Link href="/contactUs" className="dropdown-item">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="nav-link">JOIN IN</button>
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
            </nav>
          </div>

          {/* Right Section: SIGN IN and Search */}
          <div className="hidden lg:flex items-center space-x-6">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="signin-button">
              <Link href="#" className="dropdown-item">
                SIGN IN
              </Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <Menu className="text-white" />
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="sidebar fixed inset-0 z-50 bg-black/80 text-white p-6">
            <div className="flex justify-between items-center mb-6">
              <Image src={logo} alt="Play2Help Logo" width={50} height={50} />
              <button
                type="button"
                className="text-3xl focus:outline-none"
                onClick={toggleSidebar}
              >
                <X />
              </button>
            </div>
            <nav className="space-y-4">
              <Link href="/play" className="sidebar-link">
                PLAY
              </Link>
              <div className="space-y-2">
                <p className="font-medium">WHO WE ARE</p>
                <Link href="/charities" className="sidebar-link pl-4">
                  Charities
                </Link>
                <Link href="/why" className="sidebar-link pl-4">
                  Why
                </Link>
              </div>
              <div className="space-y-2">
                <p className="font-medium">WORK WITH US</p>
                <Link href="/rewards" className="sidebar-link pl-4">
                  Rewards
                </Link>
                <Link href="/boosters" className="sidebar-link pl-4">
                  Boosters
                </Link>
                <Link href="/contact-us" className="sidebar-link pl-4">
                  Contact Us
                </Link>
              </div>
              <Link href="/join" className="sidebar-link">
                JOIN IN
              </Link>
              <button className="signin-button mt-4">SIGN IN</button>
              <input
                type="text"
                placeholder="Search"
                className="search-input mt-4"
              />
            </nav>
          </div>
        )}
      </header>
    </HeaderWrapper>
  );
}
