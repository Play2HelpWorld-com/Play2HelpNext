"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import Link from "next/link";
import { Charity } from "@/types/charity";

interface BlogItemProps {
  blog: Charity;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  const widgets = useMemo(() => [{ ...blog }], [blog]);

  useEffect(() => {
    widgets.forEach((widget) => {
      const { id, src } = widget;
      const pfx = window.location.protocol === "https:" ? "https" : "http";
      const el = document.getElementById(id);
      if (el) {
        const script = document.createElement("script");
        script.src = pfx + src;
        el.appendChild(script);
      }
    });
  }, [widgets]);

  return (
    <>
      {widgets.map((widget) => (
        <motion.div
          key={widget.id}
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="animate_top group relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl dark:border-strokedark dark:bg-blacksection"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          
          {/* Charity widget integration */}
          <Link href="#" className="relative block overflow-hidden">
            <div className="relative aspect-[368/239] overflow-hidden rounded-t-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <div id={widget.id} className="h-full w-full transition-transform duration-300 group-hover:scale-105"></div>
            </div>
          </Link>

          <div className="relative p-6">
            {/* Category badge */}
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Charitable Cause</span>
            </div>
            
            <h3 className="mb-3 line-clamp-2 text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
              <Link href="#" className="inline">{widget.title}</Link>
            </h3>
            
            <p className="mb-4 line-clamp-3 leading-relaxed text-gray-600 dark:text-gray-300">{widget.metadata}</p>
            
            {/* Impact indicator */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <span>Making Impact</span>
              </div>
              
              <Link 
                href="#" 
                className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5 dark:text-primary"
              >
                <span>Learn More</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default BlogItem;
