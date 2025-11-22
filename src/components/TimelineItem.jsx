import React from 'react'

const TimelineItem = ({ exp, index }) => {
  const leftSide = index % 2 === 0; // alternate L/R

  return (
    <div
      className={`relative w-full flex justify-end md:${leftSide ? "justify-start" : "justify-end"}`}
    >
      {/* Dot */}
      <div
        className="absolute left-[1.1rem]  md:left-1/2 top-1/2 
             -translate-x-1/2 -translate-y-1/2
             w-5 h-5 rounded-full 
             border-2 border-white shadow-lg z-20"
        style={{ backgroundColor: exp.iconBg }}
      />

      {/* Card */}
      <div
        className={`
          w-[90%] md:w-[45%] p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl relative
          transition-all duration-700 ease-out animate-fadeSlide
          ${leftSide ? "slide-left" : "slide-right"}
        `}
      >
        {/* Icon + Title */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex justify-center items-center">
            <img src={exp.icon} alt={exp.company_name} className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-500 text-sm">{exp.company_name}</p>
          </div>
        </div>

        {/* Date */}
        <p className="text-blue-600 dark:text-blue-400 mt-2 font-medium text-sm">
          {exp.date}
        </p>

        {/* Points */}
        <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
          {exp.points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem