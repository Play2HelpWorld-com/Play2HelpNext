"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Downloads = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("windows");

  const platforms = [
    {
      id: "windows",
      name: "Windows",
      icon: "/images/icon/windows.png",
      url: "https://storage.googleapis.com/indexpck/play2world3d_desktop.zip",
    },
    {
      id: "mac",
      name: "MacOS",
      icon: "/images/icon/mac2.png",
      url: "https://storage.googleapis.com/indexpck/play2world3d_desktop.zip",
    },
    {
      id: "linux",
      name: "Linux",
      icon: "/images/icon/linux.png",
      url: "https://storage.googleapis.com/indexpck/play2world3d_desktop.zip",
    },
  ];

  const handlePlatformChange = (platformId: string) => {
    setSelectedPlatform(platformId);
  };

  const selectedPlatformDetails = platforms.find(
    (platform) => platform.id === selectedPlatform,
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-black dark:from-gray-800 dark:to-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="mb-10 text-center text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Download Our 3D World
        </motion.h1>
        <motion.p
          className="mb-12 text-center text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Choose your platform and get started with an immersive gaming
          experience.
        </motion.p>

        {/* Platform Selector */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {platforms.map((platform) => (
            <motion.button
              key={platform.id}
              onClick={() => handlePlatformChange(platform.id)}
              className={`flex transform flex-col items-center space-y-2 rounded-xl p-6 shadow-xl transition-all duration-300 hover:scale-105 ${
                selectedPlatform === platform.id
                  ? "bg-blue-600/10 text-black dark:bg-slate-100/90"
                  : "bg-gray-300/50 dark:bg-gray-700/50"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={platform.icon}
                alt={platform.name}
                width={80}
                height={80}
              />
              <span className="text-lg font-semibold">{platform.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Download Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="mb-6 text-3xl font-semibold">
            Download for {selectedPlatformDetails?.name}
          </h2>
          <a
            href={selectedPlatformDetails?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary-dark inline-block rounded-xl bg-orange-600/90 px-8 py-4 text-lg font-bold text-black transition-transform duration-300 hover:scale-105"
          >
            Download Now
          </a>
        </motion.div>

        {/* Game Features */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold">Immersive Graphics</h3>
            <p>
              Experience stunning visuals and breathtaking environments that
              make gameplay more engaging.
            </p>
          </motion.div>
          <motion.div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold">Multiplayer Mode</h3>
            <p>
              Connect with friends and players around the globe to enhance your
              gaming experience.
            </p>
          </motion.div>
          <motion.div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold">Frequent Updates</h3>
            <p>
              Enjoy new content, improvements, and bug fixes with regular
              updates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Downloads;
