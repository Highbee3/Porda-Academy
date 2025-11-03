'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Academics() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[70vh] flex items-center justify-center bg-linear-to-r from-blue-600 to-yellow-400 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/470174534_604841305549900_5142530699086807203_n.jpg_xdjjau.jpg"
            alt="Students studying"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Academic Excellence at Proda Academy
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Empowering every learner with critical thinking, innovation, and lifelong skills for success.
          </p>
        </motion.div>
      </motion.section>

      {/* CORE PHILOSOPHY */}
      <section className="py-20 px-8 md:px-20 bg-white text-center">
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold text-[#673E73] mb-6"
        >
          Our Academic Philosophy
        </h2>
        <p
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          At Proda Academy, we believe education should go beyond textbooks. Our academic programs foster curiosity,
          innovation, and leadership. We nurture each student’s unique potential through a balanced blend of academics,
          creativity, and moral values.
        </p>
      </section>

      {/* PROGRAMS OFFERED */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-[#673E73] mb-12"
          data-aos="zoom-in"
        >
          Academic Divisions
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Early Years (Nursery)',
              desc: 'Our foundation for lifelong learning — creative play, emotional development, and discovery learning.',
               img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/480547825_619161950869839_1169411478869799599_n.jpg_ivufcf.jpg',
              
            },
            {
              title: 'Primary School',
              desc: 'Strong academic core in literacy, numeracy, and science combined with moral and social growth.',
             img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/469058486_599347539432610_7374410679488712494_n.jpg_ws4fdq.jpg',
            },
            {
              title: 'Secondary School',
              desc: 'Holistic curriculum preparing students for national and international examinations and leadership roles.',
              img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/476124150_606220032164031_9042293141873243908_n.jpg_fgwy3i.jpg',
            },
          ].map((program, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              <Image
                src={program.img}
                alt={program.title}
                width={500}
                height={350}
                className="rounded-2xl shadow-lg object-cover w-full h-64"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CURRICULUM HIGHLIGHTS */}
      <section className="py-20 px-8 md:px-20 bg-linear-to-r from-blue-700 to-amber-400 text-white">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl md:text-4xl font-bold mb-10"
        >
          Curriculum Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: '📚',
              title: 'STEM Integration',
              text: 'Encouraging critical thinking and creativity through Science, Technology, Engineering & Math.',
            },
            {
              icon: '🌍',
              title: 'Global Citizenship',
              text: 'Building awareness and empathy towards global issues and diverse cultures.',
            },
            {
              icon: '🎨',
              title: 'Creative Arts',
              text: 'Unlocking imagination through visual arts, drama, and music.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm shadow-lg"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm opacity-90">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join the Proda Academic Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Discover a world-class education designed to prepare your child for success — academically, morally, and socially.
          </p>
          <Link href="/Admission" className="px-6 py-3 bg-[#673E73] hover:bg-[#673E72] text-white rounded-lg shadow-md transition">
            Explore Admissions
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
