'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function News() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const newsItems = [
    {
      title: 'Proda Academy Launches New Science Lab',
      desc: 'We proudly unveil our ultra-modern science laboratory designed to inspire creativity, innovation, and hands-on learning for our students.',
      img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/images_zawyfo.jpg',
      date: 'October 20, 2025',
    },
    {
      title: 'Inter-School Debate Competition Victory',
      desc: 'Proda Academy’s debate team won first place in the state-wide competition, showcasing their brilliance and oratory skills.',
      img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/468919421_599364639430900_4871517796190070746_n.jpg_mookz9.jpg',
      date: 'September 15, 2025',
    },
    {
      title: 'Coding Bootcamp for Students',
      desc: 'Students explored programming and robotics in our first-ever coding bootcamp led by top instructors in tech.',
      img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/469124691_599347826099248_2345025010542589370_n.jpg_rgwj0c.jpg',
      date: 'August 28, 2025',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-linear-to-r from-blue-700 to-amber-400 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/Screenshot_12_d377wt.png"
            alt="Proda News Hero"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1
            data-aos="fade-down"
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Latest News & Updates
          </h1>
          <p
            data-aos="fade-up"
            className="text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Stay informed about upcoming events, student achievements, and new
            innovations at Proda Academy.
          </p>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-20 px-6 md:px-20">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl md:text-4xl font-bold text-[#673E73] mb-12"
        >
          Our Latest Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {newsItems.map((item, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <button className="px-4 py-2 bg-[#673E73] hover:bg-[#673E71] text-white text-sm rounded-lg transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="py-20 bg-linear-to-r from-blue-600 to-yellow-400 text-white text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be Part of Our Growing Story
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-white/90">
          Follow our updates, join our events, and celebrate every success with
          Proda Academy — where excellence begins.
        </p>
        <button className="px-6 py-3 bg-white text-[#673E73] font-semibold rounded-lg hover:bg-gray-100 transition">
          Visit Our Blog
        </button>
      </section>
    </div>
  );
}
