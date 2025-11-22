import { useState } from "react";
import { experiences, skills } from "../constants";
import TimelineItem from "../components/TimelineItem";

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
            <div key={skill.name} className="block-container w-20 h-20">
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
    </section>
  );
};


export default About;