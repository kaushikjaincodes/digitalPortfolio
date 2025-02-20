import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaushik Jain",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Sleeker Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md shadow-md border-b border-white/10 px-10 py-4 flex justify-center  items-center z-50">
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition duration-300">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
             <a 
              href="/Kaushik_Jain_Resume.pdf" 
              download="Kaushik_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition duration-300" >
              Resume
            </a>
          </div>

        </nav>
        {children}
      </body>
    </html>
  );
}
