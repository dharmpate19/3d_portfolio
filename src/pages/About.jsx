import { useState } from "react";
import { experiences, skills, socialLinks } from "../constants";
import TimelineItem from "../components/TimelineItem";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Dharm
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in India, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12 justify-center md:justify-start">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="block-container w-10 h-10 md:w-20 md:h-20"
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  loading="lazy"
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Profiles */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text ">Find Me Online</h3>

        <div className="mt-10 flex flex-wrap gap-6 w-full">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl dark:bg-gray-800 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex justify-center items-center">
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="w-7 h-7 object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {item.name}
                </span>
                <span className="text-sm text-blue-500">Visit Profile →</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-state-500">
          <p>
            I've worked with many companies, leveling up my skills and teaming
            up with smart people. Here's the rundown:
          </p>
        </div>
        {/* ⭐ Animated Vertical Timeline */}
        <div className="relative mt-14 max-w-4xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-1 h-full pointer-events-none">
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-5 h-5 bg-gray-400 rounded-full z-20" />
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 z-0" />
            <div className="absolute inset-0 overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 animate-flow" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-4 h-4 bg-gray-400 rounded-full z-20" />
          </div>
          <div className="space-y-24 mt-10">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
