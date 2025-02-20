"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Boxes } from "../components/ui/background-boxes";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 relative overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 animate-gradient" />

        {/* Content */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hey, I'm Kaushik Jain
        </motion.h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white mb-6 relative z-10">
          Full Stack Web Developer
        </p>
        <a href="#projects">
          <button className="p-[3px] relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-4 sm:px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              See My Work
            </div>
          </button>
        </a>
      </section>

      <section id="about" className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20 gap-10">
        <div className="md:w-1/2">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 text-justify">
            I am a passionate web developer specializing in building modern, interactive applications that deliver seamless user experiences. With a strong foundation in frontend technologies like React, Next.js, and Tailwind CSS, I focus on creating visually appealing and highly functional interfaces. My expertise extends to backend development, ensuring efficient data management and secure authentication using tools like Node.js, MongoDB, and Supabase. I enjoy exploring new technologies, continuously refining my skills, and pushing the boundaries of web development to craft innovative digital experiences. Whether it's optimizing performance, implementing smooth animations, or enhancing user engagement, I am committed to building applications that stand out.
          </p>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/about.jpg" alt="About Me" width={500} height={100} className="rounded-lg shadow-lg" />
        </motion.div>
      </section>

      {/* Projects Section (Image-Text) */}
      <section id="projects" className="h-screen flex flex-col md:flex-row-reverse items-center justify-center px-4 md:px-20 gap-10">
        <div className="md:w-1/2">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 text-justify">
            I have worked on various projects, including web applications, portfolio sites, and AI-powered platforms. Some of my notable projects include EventEase, a TypeScript-based event management web application, Inscribe, a full-stack blog platform with Google authentication, and MiniMinter, a web-based NFT minting platform integrated with blockchain technology. Additionally, I developed an AI-powered Nutrition and Diet Planner, which was a finalist in the IEEE DAIICT “Tich Tech Toe” Hackathon. These projects have strengthened my expertise in web development while also allowing me to explore AI applications in real-world scenarios.
          </p>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/project.png" alt="Projects" width={500} height={300} className="rounded-lg shadow-lg" />
        </motion.div>
      </section>

      {/* Contact Section (Text-Image) */}
      <section id="contact" className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20 gap-10">
        <div className="md:w-1/2">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 mb-7">
            Let's connect! You can reach out to me via email:
            <a href="mailto:your@email.com" className="text-blue-400 hover:underline"> kaushikjain2626@gmail.com</a>
          </p>
          <div className="flex space-x-4">
            {/* LinkedIn Button */}
            <a href="https://linkedin.com/kaushikjaincodes" target="_blank" rel="noopener noreferrer">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg" />
                <div className="px-4 sm:px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center space-x-2">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </div>
              </button>
            </a>

            {/* GitHub Button (Black Theme) */}
            <a href="https://github.com/kaushikjaincodes" target="_blank" rel="noopener noreferrer">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gray-900 rounded-lg" />
                <div className="px-4 sm:px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center space-x-2">
                  <FaGithub />
                  <span>GitHub</span>
                </div>
              </button>
            </a>

            {/* LeetCode Button */}
            <a href="https://leetcode.com/kaushikjaincodes" target="_blank" rel="noopener noreferrer">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg" />
                <div className="px-4 sm:px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center space-x-2">
                  <SiLeetcode />
                  <span>LeetCode</span>
                </div>
              </button>
            </a>
          </div>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/contact.jpg" alt="Contact" width={500} height={300} className="rounded-lg shadow-lg" />
        </motion.div>
      </section>
    </div>
  );
}
