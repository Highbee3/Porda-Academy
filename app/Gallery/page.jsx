'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const images = [
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/516871052_776055788416679_270150901733097682_n.jpg_vhx32t.jpg',
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/569223620_3411464425662652_5703656895801432386_n.jpg_z53zxj.jpg',
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/568855457_3411464728995955_3697795491772719879_n.jpg_d24m8n.jpg',
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/482268552_675328968489362_1327831150872466166_n.jpg_i5datb.jpg',
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/468934732_599347536099277_3243663704278769648_n.jpg_ch1wgi.jpg',
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/536267118_808529385169319_6026056299363063881_n.jpg_tkjzza.jpg',
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/481083428_680865621269030_3699309211457548435_n.jpg_tprchh.jpg',
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/474135106_645469728141953_628351436426090181_n.jpg_gypdbq.jpg',
    'https://res.cloudinary.com/dlzjjxtsd/image/upload/484628400_685995157422743_807851712582713082_n.jpg_djiutp.jpg',
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 py-20 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-14">
        <h1
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          data-aos="fade-down"
        >
          Our School Gallery
        </h1>
        <p
          className="max-w-2xl mx-auto text-gray-600"
          data-aos="fade-up"
        >
          Take a glimpse into the vibrant life at Proda Academy — where learning,
          creativity, and community come together.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
            data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              width={500}
              height={400}
              className="object-cover w-full h-72 hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        className="text-center mt-20"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Experience the Proda Spirit!
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          From classroom learning to extracurricular adventures — our students shine in every area of life.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
          Learn More About Our Programs
        </button>
      </div>
    </div>
  );
};

export default Gallery;
