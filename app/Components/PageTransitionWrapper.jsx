"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/app/Components/Loader";

const PageTransitionWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let frame;

    // ✅ Defer state update to avoid ESLint "set-state-in-effect" warning
    frame = requestAnimationFrame(() => {
      setLoading(true);
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-50" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransitionWrapper;
