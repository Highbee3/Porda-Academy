"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Admission() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-linear-to-r from-blue-700 to-amber-400 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/Screenshot_12_d377wt.png"
            alt="Proda Academy Admission"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div data-aos="fade-up" className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Admissions at Proda Academy
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Begin your child’s journey toward excellence — apply for admission
            today!
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Why Choose Proda Academy?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Proda Academy, we combine academic excellence with moral
              discipline, creativity, and real-world skills. Our world-class
              teachers and supportive environment ensure every learner reaches
              their full potential.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ 21st-century curriculum with global exposure</li>
              <li>✅ Experienced and passionate educators</li>
              <li>✅ Safe, innovative, and inclusive environment</li>
              <li>✅ Modern learning facilities and labs</li>
            </ul>
          </div>

          <div data-aos="fade-left" className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/480640394_619161970869837_5819412676321472550_n.jpg_y8vyhs.jpg"
              alt="School Building"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-20 px-6 md:px-20 bg-gray-100 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-10"
        >
          Admission Process
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              title: "Application",
              desc: "Obtain and complete an admission form from our office or online portal.",
              aos: "fade-right",
            },
            {
              step: "2",
              title: "Assessment",
              desc: "Prospective students undergo an entrance test and brief interview.",
              aos: "fade-up",
            },
            {
              step: "3",
              title: "Enrollment",
              desc: "Successful candidates complete documentation and begin their learning journey.",
              aos: "fade-left",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos={item.aos}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="text-5xl text-blue-600 font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-20 px-8 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-bold text-blue-700 mb-6"
          >
            Admission Requirements
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            To ensure a smooth process, applicants are required to submit the
            following documents:
          </p>

          <ul
            data-aos="fade-up"
            className="text-gray-700 space-y-3 text-left max-w-md mx-auto"
          >
            <li>• Birth certificate</li>
            <li>• Recent passport photographs (2 copies)</li>
            <li>• Previous school report (for transfers)</li>
            <li>• Completed admission form</li>
            <li>• Medical report (optional but recommended)</li>
          </ul>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-linear-to-r from-blue-700 to-amber-400 text-center text-white">
        <div data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join the Proda Family?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Begin the enrollment process today and give your child a head start
            on a future filled with excellence.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* APPLY NOW MODAL */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
            ></motion.div>

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                  Apply for Admission
                </h3>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Select Class</option>
                    <option>Nursery</option>
                    <option>Primary</option>
                    <option>Secondary</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your child..."
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    rows={3}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
