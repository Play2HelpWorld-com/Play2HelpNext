import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = () => {
  return (
    <>
      <div className="animate_top overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg dark:border-strokedark dark:bg-blacksection">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-black dark:text-white">
            More Charitable Causes
          </h4>
        </div>

        <div className="space-y-5">
          {BlogData.slice(0, 3).map((post, key) => (
            <div
              className="group flex gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10"
              key={key}
            >
              <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                {post.src ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <svg className="h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">No image</div>
                )}
              </div>
              <div className="flex-1">
                <h5 className="mb-1 line-clamp-2 text-base font-semibold leading-snug text-black transition-all duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  <Link href={`/blog/blog-details`} className="inline">
                    {post.title}
                  </Link>
                </h5>
                <p className="line-clamp-1 text-xs text-gray-500 dark:text-gray-400">
                  {post.metadata.slice(0, 60)}...
                </p>
              </div>
              <div className="flex shrink-0 items-center">
                <svg className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-100 pt-6 dark:border-gray-700">
          <Link 
            href="/blog" 
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-transparent px-6 py-3 font-semibold text-primary transition-all duration-300 hover:from-primary hover:to-primary/80 hover:text-white"
          >
            <span>Explore All Causes</span>
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
