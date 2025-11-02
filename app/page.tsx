"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LiaMedalSolid } from "react-icons/lia";
import { FiUsers, FiBookOpen } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="overflow-x-hidden">
    
      <div className="relative flex flex-col md:flex-row min-h-screen bg-gray-100">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/GFrp1TnXgAAnnDf_ck69ze.jpg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />

        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full md:px-20 enter min-h-screen"
          data-aos="fade-up"
        >
          <h1 className="text-black text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Empowering Future Leaders Through Excellence
          </h1>
          <p className="text-black max-w-2xl text-base md:text-lg text-center">
            Welcome to Proda Primary & Secondary School, where we nurture
            academic excellence, character development, and lifelong learning in
            a supportive community.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="bg-[#0B60EA] text-white py-2.5 px-6 rounded-lg cursor-pointer text-sm md:text-base">
              <Link href="/Admissions">Apply Now</Link>
            </button>
            <button className="border-2 border-black text-[#0B60EA] py-2.5 px-6 rounded-lg cursor-pointer text-sm md:text-base">
              <Link href="/About">Learn More</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-amber-50 w-full flex  gap-6 items-center justify-center text-center p-6 md:p-12 md:flex-row flex-col">
        {[
          { icon: <LiaMedalSolid />, number: "25+", text: "Years of Excellence" },
          { icon: <FiUsers />, number: "1,200+", text: "Students Enrolled" },
          { icon: <FiBookOpen />, number: "15+", text: "Academic Programs" },
          { icon: <RiGraduationCapLine />, number: "98%", text: "Graduation Rate" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-amber-50 rounded-2xl p-8 shadow-lg w-72 sm:w-80 hover:scale-105 hover:bg-white hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in"
          >
            <div className="text-[#0B60EA] text-4xl mb-2">{item.icon}</div>
            <h2 className="font-semibold text-black text-2xl">{item.number}</h2>
            <p className="text-black">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="w-full bg-amber-50 flex flex-col md:flex-row items-center text-black p-10 gap-8 md:gap-16">
        <div className="w-full  md:w-100 h-full rounded-full" data-aos="fade-right">
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/ekebuwqkd5ewtakio2vj.jpg"
            alt="Professor David Adewuyi"
            width={650}
            height={450}
            className="rounded-full object-cover w-100 h-100 shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6" data-aos="fade-left">
          <h2 className="font-semibold text-2xl">Our Mission</h2>
          <p>
            To provide a safe, nurturing environment where students develop
            academically, socially, and emotionally, preparing them to be
            responsible global citizens and lifelong learners.
          </p>
          <h2 className="font-semibold text-2xl">Professor David Adewuyi</h2>
          <p>
            With over 20 years of experience in education, Professor Adewuyi is
            dedicated to fostering a love of learning in students and empowering
            them to reach their full potential.
          </p>
          <button className="bg-[#0B60EA] text-white py-2.5 px-6 rounded-lg cursor-pointer text-sm md:text-base">
            <Link href="/About">Learn More About Us</Link>
          </button>
        </div>
      </div>

      {/* Academic Excellence Section */}
      <div className="w-full bg-white text-black flex flex-col items-center p-10 md:p-20 space-y-8">
        <h2 className="font-semibold text-2xl md:text-3xl" data-aos="fade-up">
          Academic Excellence
        </h2>
        <p className="text-center max-w-2xl" data-aos="fade-up" data-aos-delay="200">
          Our comprehensive programs cater to students from primary through
          secondary levels, ensuring a seamless educational journey.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
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
            <p className="flex items-center font-semibold text-lg mt-4 p-2">
              <FiBookOpen className="text-[#0B60EA] mr-2" /> Primary Education
            </p>
            <p className="p-1">
              Building strong foundations in literacy, numeracy, and creativity
              for young learners.
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
            <p className="flex items-center font-semibold text-lg mt-4 p-2">
              <RiGraduationCapLine className="text-[#0B60EA] mr-2" /> Secondary
              Education
            </p>
            <p className="p-1">
              Preparing students for higher learning through advanced academics
              and leadership programs.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-amber-50 py-20 px-6 md:px-20 text-center">
        <h2
          className="text-3xl font-bold text-black mb-10"
          data-aos="fade-up"
        >
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
              <p className="italic text-gray-700 mb-4">&ldquo;{t.text}&rdquo;</p>
              <h3 className="font-semibold text-lg text-black">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
