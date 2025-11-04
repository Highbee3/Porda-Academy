"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLightbulb, FaHeart, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <main className=" text-gray-800">
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center text-center px-6 py-16 overflow-hidden mt-20">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/GFrp1TnXgAAnnDf_ck69ze.jpg"
          alt="School background"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-b from-blue-900/70 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-6xl text-white space-y-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-amber-400">Proda Academy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-[1rem] leading-relaxed text-gray-200 w-full mx-auto"
          >
            <strong>Proda Primary & Secondary School</strong>a K-12 inclusive
            haven, ignites curiosity via inquiry-based, real-world learning;
            unleashes creativity through arts, tech, and drama in dedicated
            studios; and forges character with mentorship emphasizing empathy,
            integrity, and service. Primary (K-5) builds literacy, numeracy, and
            science foundations playfully, while secondary (6-12) advances STEM,
            humanities, and leadership for future success. A collaborative
            community of passionate educators, parents, and students thrives on
            modern campuses with tech classrooms, libraries, and sports hubs,
            fostering resilient, compassionate leaders beyond exams visit to
            witness the transformation.
          </motion.p>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Our Vision",
                text: "To be a beacon of excellence producing globally minded and ethically strong leaders.",
              },
              {
                title: "Our Mission",
                text: "To nurture intelligence and character through holistic education in a caring environment.",
              },
              {
                title: "Our Achievements",
                text: "We take pride in our alumni’s successes across fields — from academics to creative arts.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.2, duration: 1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
              >
                <h2 className="text-xl font-semibold text-amber-400 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-100">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOUNDER SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/proda-removebg-preview_gjinxk.png"
              alt="Founder"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover w-full max-w-[350px] md:max-w-[420px]"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-[#673E73] mb-4">
              Message from the Founder
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              “At Proda Academy, we believe education goes beyond academics. It
              is about instilling values, discipline, and creativity in every
              child. Our mission is to raise young minds that will transform
              their communities and the world.”
            </p>

            <p className="text-amber-500 font-semibold">— The Founder</p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-linear-to-r from-blue-900 to-amber-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              icon: <FaLightbulb size={40} />,
              title: "Innovation",
              text: "We encourage curiosity, creativity, and critical thinking.",
            },
            {
              icon: <FaHeart size={40} />,
              title: "Integrity",
              text: "We uphold honesty, respect, and strong moral principles.",
            },
            {
              icon: <FaUsers size={40} />,
              title: "Community",
              text: "We foster teamwork, empathy, and a spirit of service.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md w-64"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-amber-400">{value.icon}</div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-200 text-sm">{value.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6 ">
          {[
            {
              name: "Mr. Ademola A.",
              role: "Admin",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/Screenshot__13_-removebg-preview_oee3ky.png",
            },
            {
              name: "Mr.David A.",
              role: "Vice Principal",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/536411753_812283831460541_525719781342733733_n.jpg_tfkhgc.jpg",
            },
            {
              name: "Mrs. Kemi O.",
              role: "Head of Academics",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/569028742_3411464622329299_3741133874552828551_n.jpg_sf8j5t.jpg",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden w-64 hover:shadow-xl transition-shadow"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-70 object-cover "
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#673E73]">
                  {member.name}
                </h3>
                <p className="text-amber-600 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
