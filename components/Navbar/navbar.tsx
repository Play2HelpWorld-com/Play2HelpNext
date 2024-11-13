import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderWrapper } from './nav.styled';
import logo from '@/public/images/play2help_logo.webp';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeaderWrapper>
      <header>
        {/* Main Header */}
        <div id='navItemContainer' className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                id='logo'
                src={logo}
                alt="play2help logo"
                width={45}
                height={45}
              />
            </Link>
          </div>

          {/* Navbar */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="http://play2helpup.free.nf/" target="_blank" className="text-black hover:line-through">Play</Link>
            <Link href="/highScorers" target="_blank" className="text-black hover:line-through">Rewards</Link>
            <Link href="/charities" className="text-black hover:line-through">Charities</Link>

            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="text-black hover:line-through">Join In</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2">
                <Link href="https://www.youtube.com/channel/UC6PENDkMRLo8Or4-jjtJ3aw" target="_blank" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">YouTube</Link>
                <Link href="https://mauricebigmoflynn.wordpress.com/" target="_blank" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Blog</Link>
                <Link href="https://www.eventbrite.com/e/full-community-meetup-tickets-346061678797" target="_blank" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Events</Link>
                <Link href="https://www.surveymonkey.com/r/ZKM37SK" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Votes</Link>
                <Link href="https://www.facebook.com/Play2.HelpWorld/photos/a.210431825738952/5317915491657201/" target="_blank" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Job</Link>
                <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Signin</Link>
              </div>
            </div>
            <Link href="/aboutus.php" target="_blank" className="text-black hover:line-through">Why</Link>
            <Link href="/contactus.php" className="text-black hover:line-through">Contact Us</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            title='Open Sidebar'
            type='button'
            className="lg:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <Menu color='black' />
          </button>
        </div>

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-white p-4">
            <div className="flex justify-between items-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="play2help logo"
                  width={50}
                  height={50}
                />
              </Link>
              <button
                title='Close Sidebar'
                type='button'
                className="text-2xl focus:outline-none"
                onClick={toggleSidebar}
              >
                <X color='black' />
              </button>
            </div>
            <nav className="mt-4 space-y-2">
              <Link href="http://play2helpup.free.nf/" target="_blank" className="block py-2 border-b text-black hover:line-through">Play</Link>
              <Link href="/highScorers" target="_blank" className="block py-2 border-b text-black hover:line-through">Rewards</Link>
              <Link href="/charities" className="block py-2 border-b text-black hover:line-through">Charities</Link>
              <div className="relative group">
                <button className="w-full text-left py-2 border-b text-black hover:line-through">Join In</button>
                <div className="mt-1 bg-white shadow-lg rounded">
                  <Link href="https://www.youtube.com/channel/UC6PENDkMRLo8Or4-jjtJ3aw" target="_blank" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">YouTube</Link>
                  <Link href="https://mauricebigmoflynn.wordpress.com/" target="_blank" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Blog</Link>
                  <Link href="https://www.eventbrite.com/e/full-community-meetup-tickets-346061678797" target="_blank" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Events</Link>
                  <Link href="https://www.surveymonkey.com/r/ZKM37SK" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Votes</Link>
                  <Link href="https://www.facebook.com/Play2.HelpWorld/photos/a.210431825738952/5317915491657201/" target="_blank" className="block px-4 py-2 text-black hover:bg-gray-100 hover:line-through">Job</Link>
                </div>
              </div>
              <Link href="/aboutus.php" target="_blank" className="block py-2 border-b text-black hover:line-through">Why</Link>
              <Link href="/contactus.php" className="block py-2 border-b text-black hover:line-through">Contact Us</Link>
            </nav>
          </div>
        )}
      </header>
    </HeaderWrapper>
  );
}
