'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Calendar() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const events = [
    {
      title: 'Resumption Day – First Term',
      date: 'September 9, 2025',
      desc: 'Students resume for the new academic session with an orientation program for new pupils and parents.',
      img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/468996272_599347796099251_8223408016223170449_n.jpg_gwqrtf.jpg',
    },
    {
      title: 'Career Day ',
      date: 'October 18, 2025',
      desc: 'A day to showcase the rich cultural heritage of our students through attire, music, and food.',
      img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/535495061_812311461457778_3080257987468649249_n.jpg_jpcgke.jpg',
    },
    {
      title: 'Excursion Time',
      date: 'November 4–8, 2025',
      desc: 'A short break to refresh and prepare for the next half of the term.',
      img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/535629748_812315171457407_351497268661781610_n.jpg_dfdg7k.jpg',
    },
    {
      title: 'End of Year Party & Graduation',
      date: 'December 2–12, 2025',
      desc: 'Students demonstrate their academic progress through comprehensive assessments across all subjects.',
      img: 'https://res.cloudinary.com/dlzjjxtsd/image/upload/481959500_629801256472575_1409887888696993807_n.jpg_udhmtk.jpg',
    },
  ];

  return (
    <div className=" text-gray-800">
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-linear-to-r from-blue-700 to-amber-400 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/Screenshot_12_d377wt.png"
            alt="School calendar background"
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
            School Calendar
          </h1>
          <p
            data-aos="fade-up"
            className="text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Stay up to date with important events, term schedules, and celebrations at Proda Academy.
          </p>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-[#673E73] mb-12"
          data-aos="fade-up"
        >
          Upcoming Events & Activities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-500 overflow-hidden"
            >
              <Image
                src={event.img}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-[#673E73] font-medium mb-3">
                  {event.date}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {event.desc}
                </p>
                <button className="px-4 py-2 bg-[#673E73] hover:bg-[#673E73] text-white text-sm rounded-lg transition">
                  Add to Calendar
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
          Never Miss an Important Date
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-white/90">
          Stay connected to every milestone and celebration at Proda Academy. Subscribe to our newsletter or sync our academic calendar.
        </p>
        <button className="px-6 py-3 bg-white text-[#673E73] font-semibold rounded-lg hover:bg-gray-100 transition">
          Subscribe Now
        </button>
      </section>
    </div>
  );
}
