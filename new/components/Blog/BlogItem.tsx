"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import Link from "next/link";

const BlogItem = () => {
  const widgets = useMemo(
    () => [
      {
        id: "jg-widget-play2helpworldwateraid-257",
        src: "://widgets.justgiving.com/fundraisingpage/play2helpworldwateraid?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwd29ybGR3YXRlcmFpZC0yNTcmdz00MDAmYj1pbWFnZSxkb25hdGUmaWI9dGl0bGUsc3VtbWFyeSxwcm9ncmVzcyxyYWlzZWQsdGFyZ2V0",
        title: "Play2Help: World Water Aid",
        metadata: "Help provide clean water to communities in need.",
      },
      {
        id: "jg-widget-play2helpworldwwf-988",
        src: "://widgets.justgiving.com/fundraisingpage/play2helpworldwwf?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwd29ybGR3d2YtOTg4Jnc9NDAwJmI9aW1hZ2UsZG9uYXRlJmliPXN1bW1hcnkscHJvZ3Jlc3MscmFpc2VkLHRhcmdldA%3D%3D",
        title: "Play2Help: WWF",
        metadata: "Support wildlife conservation with your donations.",
      },
      {
        id: "jg-widget-play2helpworldmsfdocswithoutborders-928",
        src: "://widgets.justgiving.com/fundraisingpage/play2helpworldmsfdocswithoutborders?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwd29ybGRtc2Zkb2Nzd2l0aG91dGJvcmRlcnMtOTI4Jnc9NDAwJmI9aW1hZ2UsZG9uYXRlJmliPXRpdGxlLHN1bW1hcnkscHJvZ3Jlc3MscmFpc2VkLHRhcmdldA%3D%3D",
        title: "Play2Help: MSF Doctors Without Borders",
        metadata: "Provide medical aid to those who need it most.",
      },
    ],
    [],
  );

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
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
        >
          {/* Charity widget integration */}
          <Link href="#" className="relative block aspect-[368/239]">
            <div id={widget.id} className="h-full w-full"></div>
          </Link>

          <div className="px-4">
            <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
              <Link href="#">{widget.title}</Link>
            </h3>
            <p className="line-clamp-3">{widget.metadata}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default BlogItem;
