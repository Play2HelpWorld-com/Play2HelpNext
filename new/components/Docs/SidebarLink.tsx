"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SidebarLink = () => {
  const searchParams = useSearchParams();
  const activeLink = searchParams?.get("section"); // Optional chaining for safety

  // Links data
  const links = [
    { label: "Introduction", section: "introduction" },
    { label: "What Is Play2World?", section: "what-is-play2world" },
    { label: "How Do Rewards Work?", section: "how-rewards-work" },
    { label: "Why Do We Do This?", section: "why-do-we-do-this" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.section} className="block">
          <Link
            href={`/docs?section=${link.section}`}
            className={`flex w-full rounded-sm px-3 py-2 text-base ${
              activeLink === link.section
                ? "bg-stroke text-black dark:bg-blackho dark:text-white"
                : "text-black dark:text-white"
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default SidebarLink;
