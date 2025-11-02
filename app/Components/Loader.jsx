"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";



const Loader = () => {
  const [loading, setLoading] = useState(true);

  // Show loader for 2 seconds on reload
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-9999">
      {/* Glowing gradient background */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute w-48 h-48 rounded-full bg-Linear-to-r from-blue-500 to-amber-400 blur-2xl opacity-30"
      />

      {/* Rotating Logo with border ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "linear",
        }}
        className="relative flex items-center justify-center w-36 h-36 border-[6px] border-t-transparent border-b-transparent rounded-full"
        style={{
          borderLeftColor: "#0B60EA",
          borderRightColor: "#FBBF24",
          boxShadow: "0 0 30px rgba(11,96,234,0.3)",
        }}
      >
        {/* ✅ Rotating Logo */}
        <motion.div
          animate={{ rotate: -360 }} // rotates opposite direction for a cool effect
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-20 h-20"
        >
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/proda-removebg-preview_gjinxk.png"
            alt="Proda Academy Logo"
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
