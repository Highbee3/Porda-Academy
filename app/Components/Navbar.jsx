"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR TOP */}
      <div className="w-full h-23 p-4 bg-[#673E73] flex items-center justify-between px-6 md:px-11 backdrop-blur-md border-b border-white/10 fixed top-0 z-50">
        {/* LOGO */}
        <div className="flex items-center rounded-full px-1 p-10 ">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/428682794_378498488269521_3160629597398820074_n.jpg_c5wkae.jpg"
              alt="Logo"
              width={60}
              height={60}
              className=" rounded-md h-20 w-20   object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-6 text-white font-medium text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Academics">Academics</Link>
          </li>
          <li>
            <Link href="/Admission">Admissions</Link>
          </li>
          <li>
            <Link href="/News">News</Link>
          </li>
          <li>
            <Link href="/Calendar">Calendar</Link>
          </li>
          <li>
            <Link href="/Gallery">Gallery</Link>
          </li>
        </ul>

        {/* DESKTOP APPLY BUTTON */}
        <button className="bg-[#9A48D0] text-white px-4 py-2 rounded-lg cursor-pointer text-sm md:block hidden shadow-lg hover:bg-purple-600 transition duration-300">
          <Link href="/Admission">Apply Now</Link>
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ✅ BACKDROP OVERLAY (click to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ MOBILE SLIDE-IN MENU */}
      <ul
        className={`fixed top-20 right-0 h-full w-64 text-white flex flex-col items-center py-20 space-y-6 font-medium md:hidden
        bg-[#673E73] shadow-xl z-50 transition-all duration-500 ease-in-out
        ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <li>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/Academics" onClick={() => setOpen(false)}>
            Academics
          </Link>
        </li>
        <li>
          <Link href="/Admission" onClick={() => setOpen(false)}>
            Admissions
          </Link>
        </li>
        <li>
          <Link href="/News" onClick={() => setOpen(false)}>
            News
          </Link>
        </li>
        <li>
          <Link href="/Calendar" onClick={() => setOpen(false)}>
            Calendar
          </Link>
        </li>
        <li>
          <Link href="/Gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>
        </li>

        <button className="bg-[#0B60EA] text-white px-4 py-2 rounded-lg cursor-pointer text-sm shadow-md">
          <Link href="/Admission">Apply Now</Link>
        </button>
      </ul>
    </>
  );
};

export default Navbar;
