import React from "react";
import { Github, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ishita Pathunda</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100" id="home">
        <h2 className="text-4xl font-bold mb-4">ASPIRING SOFTWARE DEVELOPER AND DATA SCIENTIST</h2>
        <p className="text-lg text-gray-600">Building scalable solutions through code and curiosity.</p>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-gray-700 text-lg">
          I'm Ishita Pathunda, an undergraduate in Geophysics Engineering at IIT Kharagpur (expected 2026).
          Passionate about software development and data science, I love applying coding skills to real-world challenges.
          With a background in geophysics and strong foundations in C++, Python, and DSA, I aim to build impactful, scalable applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-6">Technical Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML/CSS</li>
            <li>React.js</li>
            <li>NumPy</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>VSCode</li>
            <li>MATLAB</li>
            <li>Google Colab</li>
            <li>Jupyter Notebook</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-6">Projects</h3>
        <div className="grid gap-6">
          <div className="border rounded-lg p-4 shadow-sm">
            <h4 className="text-xl font-bold">DSA CLI Trainer</h4>
            <p className="text-gray-700 mt-2">
              A terminal-based application for practicing categorized DSA problems. Implemented using C++, file I/O, STL, and OOP.
              <br />
              <a href="https://github.com/Ishitapathunda/competitive-trainer" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm">
            <h4 className="text-xl font-bold">Chat Application (C++)</h4>
            <p className="text-gray-700 mt-2">
              Real-time client-server chat app using C++ and Winsock socket programming.
              <br />
              <a href="https://github.com/Ishitapathunda/Chatapplication" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm">
            <h4 className="text-xl font-bold">Mood Prediction Web App</h4>
            <p className="text-gray-700 mt-2">
              Built a natural language processing (NLP) app using Hugging Face Transformers to analyze journal entries and predict user mood.
              Preprocessed text and visualized results in an interactive Streamlit UI, with mood history tracking and downloadable reports.
              <br />
              <a href="https://moodpredictor-caw8g4mdz9y5csqltpymj4.streamlit.app/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View Live App</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <p className="text-gray-700 mb-2">Let's connect! Reach out by email, phone, or visit my GitHub and LinkedIn.</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="mailto:ishitapathunda@gmail.com" className="text-gray-600 hover:text-black" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/Ishitapathunda" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ishita-pathunda-8ab902215/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-semibold" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
          <p className="text-gray-700">Phone: <a href="tel:+8770621985" className="underline text-blue-600 hover:text-blue-800">8770621985</a></p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-4 bg-white border-t">
        &copy; {new Date().getFullYear()} Ishita Pathunda. All rights reserved.
      </footer>
    </div>
  );
}
