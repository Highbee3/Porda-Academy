"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

// icons
import { LiaMedalSolid } from "react-icons/lia";
import { FiUsers, FiBookOpen } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { GiOpenBook } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { MdSchool } from "react-icons/md";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // --- Sequential counter state ---
  const [years, setYears] = useState<number>(0);
  const [students, setStudents] = useState<number>(0);
  const [programs, setPrograms] = useState<number>(0);
  const [graduation, setGraduation] = useState<number>(0);

  // helper: animate from 0 -> target over duration ms using requestAnimationFrame
  const animateValue = (
    target: number,
    duration: number,
    setter: (v: number) => void,
    isMountedRef: { current: boolean }
  ) =>
    new Promise<void>((resolve) => {
      const start = performance.now();
      const tick = (now: number) => {
        if (!isMountedRef.current) return resolve(); // stop if component unmounted
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(target * progress);
        setter(current);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setter(target); // ensure final value
          resolve();
        }
      };
      requestAnimationFrame(tick);
    });

  useEffect(() => {
    const isMountedRef = { current: true };

    (async () => {
      const perCounterDuration = 1200; // ms
      // animate sequentially
      await animateValue(
        25,
        perCounterDuration,
        (v) => isMountedRef.current && setYears(v),
        isMountedRef
      );
      await animateValue(
        1200,
        perCounterDuration,
        (v) => isMountedRef.current && setStudents(v),
        isMountedRef
      );
      await animateValue(
        15,
        perCounterDuration,
        (v) => isMountedRef.current && setPrograms(v),
        isMountedRef
      );
      await animateValue(
        98,
        perCounterDuration,
        (v) => isMountedRef.current && setGraduation(v),
        isMountedRef
      );
    })();

    return () => {
      // signal stop for any in-flight animation frames
      isMountedRef.current = false;
      // reset values if you want
      // setYears(0); setStudents(0); setPrograms(0); setGraduation(0);
    };
  }, []);

  const currentValues = [years, students, programs, graduation];

  // --- Slides ---
  const slides = [
    {
      image:
        "https://res.cloudinary.com/dlzjjxtsd/image/upload/GFrp1TnXgAAnnDf_ck69ze.jpg",
      title: "Empowering Future Leaders Through Excellence",
      subtitle:
        "Inspiring young minds to achieve greatness through innovative education and character-building.",
    },
    {
      image:
        "https://res.cloudinary.com/dlzjjxtsd/image/upload/472715374_636609269027999_6169041531565346115_n.jpg_k687gu.jpg",
      title: "Discover the Joy of Learning",
      subtitle:
        "A holistic approach to academics, arts, and athletic development.",
    },
    {
      image:
        "https://res.cloudinary.com/dlzjjxtsd/image/upload/469058486_599347539432610_7374410679488712494_n.jpg_ws4fdq.jpg",
      title: "Where Every Student Matters",
      subtitle: "A nurturing environment for growth, creativity, and success.",
    },
    {
      image:
        "https://res.cloudinary.com/dlzjjxtsd/image/upload/480547825_619161950869839_1169411478869799599_n.jpg_ivufcf.jpg",
      title: "Building a Bright and Confident Generation",
      subtitle:
        "We prepare students to excel academically and socially in a changing world.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* --- Prevent slide stacking (only active slide visible) --- */}
      <style jsx global>{`
        .swiper-slide {
          opacity: 0 !important;
          visibility: hidden !important;
        }
        .swiper-slide-active {
          opacity: 1 !important;
          visibility: visible !important;
        }
        .swiper,
        .swiper-wrapper,
        .swiper-slide {
          height: 100vh;
        }
      `}</style>

      {/* --- HERO (Left-aligned) --- */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="w-full h-screen"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-60"
              priority
            />

            <div className="absolute inset-0 bg-black/55 flex items-center">
              <div className="w-full flex flex-col items-center justify-center px-6 md:px-16 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight w-full animate__animated animate__fadeInLeft">
                  {slide.title}
                </h1>

                <p className="mb-6 text-sm md:text-lg text-white/90 max-w-lg animate__animated animate__fadeInLeft animate__delay-1s">
                  {slide.subtitle}
                </p>

                <div className="flex gap-4 mb-6 animate__animated animate__fadeInLeft animate__delay-2s">
                  <Link
                    href="/Admission"
                    className="inline-block bg-[#673e73] hover:bg-[#9B4AD0] text-white py-2.5 px-5 rounded-md text-sm md:text-base transition"
                  >
                    Apply Now
                  </Link>

                  <Link
                    href="/About"
                    className="inline-block border-2 border-[#673e73] text-white py-2.5 px-5 rounded-md text-sm md:text-base hover:bg-[#673e73] transition"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="text-sm text-white/70 hidden md:block">
                  Join our community of learners.
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- STATS (with working sequential counters) --- */}
      <div className="bg-amber-50 w-full flex gap-6 items-center justify-center text-center p-6 md:p-12 md:flex-row flex-col">
        {[
          {
            icon: <LiaMedalSolid />,
            suffix: "+",
            label: "Years of Excellence",
          },
          { icon: <FiUsers />, suffix: "+", label: "Students Enrolled" },
          { icon: <FiBookOpen />, suffix: "+", label: "Academic Programs" },
          {
            icon: <RiGraduationCapLine />,
            suffix: "%",
            label: "Graduation Rate",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-amber-50 rounded-2xl p-8 shadow-lg w-72 sm:w-80 hover:scale-105 hover:bg-white hover:shadow-2xl transition-all duration-100"
            data-aos="zoom-in"
          >
            <div className="text-[#de7a0b] text-4xl mb-2">{item.icon}</div>
            <h2 className="font-semibold text-black text-2xl">
              {i === 1
                ? currentValues[i].toLocaleString() + item.suffix
                : currentValues[i] + item.suffix}
            </h2>
            <p className="text-black">{item.label}</p>
          </div>
        ))}
      </div>

      {/* --- MISSION SECTION --- */}
      <div className="w-full bg-amber-50 flex flex-col space-x-4 md:flex-row items-center justify-center text-black p-10 md:gap-16">
        <div
          className="w-full md:w-100 h-full rounded-full"
          data-aos="fade-right"
        >
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/ekebuwqkd5ewtakio2vj.jpg"
            alt="Professor David Adewuyi"
            width={650}
            height={450}
            className="rounded-full object-cover w-100 h-100 shadow-lg"
          />
        </div>

        <div className="w-full p-2 md:w-1/2 space-y-6" data-aos="fade-left">
          <h2 className="font-semibold text-2xl">Our Mission</h2>
          <p>
            To provide a safe, nurturing environment where students develop
            academically, socially, and emotionally, preparing them to be
            responsible global citizens and lifelong learners. We are committed
            to fostering critical thinking, creativity, and a love for learning,
            while promoting values of empathy, integrity, and collaboration.
          </p>

          <h2 className="font-semibold text-2xl">Professor David Adewuyi</h2>
          <p>
            With over 20 years of experience in education, Professor Adewuyi is
            dedicated to fostering a love of learning in students and empowering
            them to reach their full potential. He is passionate about
            innovative teaching methods, mentoring young educators, and
            integrating technology to enhance learning outcomes.
          </p>

          <Link
            href="/About"
            className="bg-[#9B4AD0] text-white py-2.5 px-6 rounded-lg cursor-pointer text-sm md:text-base hover:bg-[#7a35a7] transition"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
      {/* Academic Excellence Section */}
      <div className="w-full bg-white text-black flex flex-col items-center  md:p-20 space-y-8">
        <h2 className="font-semibold text-2xl md:text-3xl" data-aos="fade-up">
          Academic Excellence
        </h2>
        <p
          className="text-center max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our comprehensive programs cater to students from nursery through
          secondary levels, ensuring a seamless educational journey. We focus on
          nurturing curiosity, critical thinking, creativity, and
          social-emotional growth at every stage of development.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
          <div
            className="bg-[#F9FAFB] flex flex-col rounded-lg shadow-lg p-4 w-full"
            data-aos="fade-left"
          >
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/475243955_604007719051929_8428445997239207511_n.jpg_rj1jzg_npzrse.jpg"
              alt="Kindergarten Education"
              width={1200}
              height={600}
              className="object-cover w-full h-64 rounded-lg"
            />
            <Link
              href="/Academics"
              className="flex items-center font-semibold text-lg mt-4 p-2"
            >
              <GiTeacher className="text-[#673E73] mr-2" /> Kindergarten
              Education
            </Link>
            <p className="p-1">
              Fostering curiosity and a love for learning, our kindergarten
              program focuses on foundational skills, social interaction, and
              early problem-solving abilities, giving children a confident start
              to their educational journey.
            </p>
          </div>

          <div
            className="bg-[#F9FAFB] flex flex-col rounded-lg shadow-lg p-4 w-full"
            data-aos="fade-left"
          >
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/480547825_619161950869839_1169411478869799599_n.jpg_ivufcf.jpg"
              alt="Nursery Education"
              width={1200}
              height={600}
              className="object-cover w-full h-64 rounded-lg"
            />
            <Link
              href="/Academics"
              className="flex items-center font-semibold text-lg mt-4 p-2"
            >
              <GiOpenBook className="text-[#673E73] mr-2" /> Nursery Education
            </Link>
            <p className="p-1">
              Our nursery program emphasizes early literacy, numeracy, and
              emotional development, encouraging exploration through play,
              discovery, and interactive learning experiences that build
              confidence and curiosity.
            </p>
          </div>

          <div
            className="bg-[#F9FAFB] flex flex-col rounded-lg shadow-lg p-4 w-full"
            data-aos="fade-right"
          >
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/472715374_636609269027999_6169041531565346115_n.jpg_loh6pb.jpg"
              alt="Primary Education"
              width={1200}
              height={600}
              className="object-cover w-full h-64 rounded-lg"
            />
            <Link
              href="/Academics"
              className="flex items-center font-semibold text-lg mt-4 p-2"
            >
              <MdSchool className="text-[#673E73] mr-2" /> Primary Education
            </Link>
            <p className="p-1">
              Our primary education program builds strong foundations in
              literacy, numeracy, science, and creativity, while promoting
              teamwork, responsibility, and a lifelong love of learning in a
              stimulating and supportive environment.
            </p>
          </div>

          <div
            className="bg-[#F9FAFB] flex flex-col rounded-lg shadow-lg p-4 w-full"
            data-aos="fade-left"
          >
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/481083428_680865621269030_3699309211457548435_n.jpg_pdgj0f.jpg"
              alt="Secondary Education"
              width={1200}
              height={600}
              className="object-cover w-full h-64 rounded-lg"
            />
            <Link
              href="/Academics"
              className="flex items-center font-semibold text-lg mt-4 p-2"
            >
              <GiGraduateCap className="text-[#673E73] mr-2" /> Secondary
              Education
            </Link>
            <p className="p-1">
              Preparing students for advanced studies, leadership roles, and
              real-world challenges, our secondary education program focuses on
              academic excellence, critical thinking, and personal growth, while
              cultivating global awareness and civic responsibility.
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="bg-amber-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-10" data-aos="fade-up">
          What Our Students & Parents Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Parent",
              text: "Proda Academy has been a blessing for my kids. The teachers truly care about every student’s success.",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/476235556_609210958531605_270372255337021601_n.jpg_izn3yn.jpg",
            },
            {
              name: "Emmanuel Peter",
              role: "Student",
              text: "I love the friendly teachers and fun learning environment. It feels like home!",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/481083428_680865621269030_3699309211457548435_n.jpg_pdgj0f.jpg",
            },
            {
              name: "Grace Williams",
              role: "Alumni",
              text: "Proda gave me the confidence and knowledge to succeed in college and beyond!",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/481959500_629801256472575_1409887888696993807_n.jpg_cxxqht.jpg",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
            >
              <Image
                src={t.img}
                alt={t.name}
                width={100}
                height={100}
                className="rounded-full mb-4 object-cover "
              />
              <p className="italic text-gray-700 mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <h3 className="font-semibold text-lg text-black">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
