"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer
      className="bg-[#673E73] text-white flex flex-col items-center px-6 py-12 space-y-8"
      data-aos="fade-up"
    >
      <div
        className="w-full max-w-6xl flex flex-wrap justify-between gap-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Logo + Text */}
        <div className="flex flex-col max-w-xs" data-aos="fade-right">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/428682794_378498488269521_3160629597398820074_n.jpg_c5wkae.jpg"
              alt="Proda Logo"
              width={60}
              height={60}
              className="w-20 h-auto mb-4"
            />
          </Link>
          <p className="text-white leading-relaxed">
            Empowering students to become future leaders through exceptional
            education and character development.
          </p>
        </div>

        {/* Quick Links */}
        <div
          className="flex flex-col space-y-3"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h3 className="text-lg font-semibold text-white mb-2 border-b border-white/30 pb-1">
            Quick Links
          </h3>
          <Link href="/About" className="hover:text-[#E57918] transition">
            About
          </Link>
          <Link href="/Academics" className="hover:text-[#E57918] transition">
            Academics
          </Link>
          <Link href="/Admission" className="hover:text-[#E57918] transition">
            Admissions
          </Link>
        </div>

        {/* Resources */}
        <div
          className="flex flex-col space-y-3"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h3 className="text-lg font-semibold text-white mb-2 border-b border-white/30 pb-1">
            Resources
          </h3>
          <Link href="/Calendar" className="hover:text-[#E57918] transition">
            School Calendar
          </Link>
          <Link href="/Gallery" className="hover:text-[#E57918] transition">
            Photo Gallery
          </Link>
          <Link href="/News" className="hover:text-[#E57918] transition">
            News & Events
          </Link>
        </div>

        {/* Contact */}
        <div
          className="flex flex-col space-y-3 max-w-sm"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h3 className="text-lg font-semibold text-white mb-2 border-b border-white/30 pb-1">
            Contact Us
          </h3>
          <p className="flex items-start gap-2 text-white">
            <CiLocationOn className="text-[#E57918] text-xl mt-1" />
            Kegbejo House, 34A Latona Street, Osogbo, Osun State
          </p>
          <p className="flex items-center gap-2 text-white">
            <HiOutlineMail className="text-[#E57918] text-xl" />
            info@prodaacademy.sch.ng
          </p>
          <p className="flex items-center gap-2 text-white">
            <FiPhoneCall className="text-[#E57918] text-xl" />
            08134139785, 08033546188
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-8" data-aos="zoom-in" data-aos-delay="250">
        <Link
          href="https://facebook.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF7A3C] text-white hover:bg-white/20 hover:text-[#673E73] backdrop-blur-sm transition-all duration-300"
        >
          <FaFacebookF size={20} />
        </Link>
        <Link
          href="https://instagram.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF7A3C] text-white hover:bg-white/20 hover:text-[#673E73] backdrop-blur-sm transition-all duration-300"
        >
          <FaInstagram size={20} />
        </Link>
        <Link
          href="https://twitter.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF7A3C] text-white hover:bg-white/20 hover:text-[#673E73] backdrop-blur-sm transition-all duration-300"
        >
          <FaTwitter size={20} />
        </Link>
        <Link
          href="https://wa.me/08134139785"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF7A3C] text-white hover:bg-white/20 hover:text-[#673E73] backdrop-blur-sm transition-all duration-300"
        >
          <FaWhatsapp size={20} />
        </Link>
      </div>

      <hr
        className="w-full border-t border-black/30 my-6"
        data-aos="fade-in"
        data-aos-delay="300"
      />

      <div
        className="text-center text-white text-sm"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p>
          &copy; {new Date().getFullYear()} Proda Primary & Secondary School.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
