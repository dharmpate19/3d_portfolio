import React from "react";

const TimelineItem = ({ exp, index }) => {
  const leftSide = index % 2 === 0; // alternate L/R

  return (
    <div
      className={`relative w-full flex justify-end md:${
        leftSide ? "justify-start" : "justify-end"
      }`}
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
          w-[90%] md:w-[45%] p-[10px] md:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl relative
          transition-all duration-700 ease-out animate-fadeSlide
          ${leftSide ? "slide-left" : "slide-right"}
        `}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Icon */}
          <div
            className="
    flex-shrink-0 
    w-[28px] h-[28px] 
    sm:w-10 sm:h-10 
    md:w-12 md:h-12
    rounded-full 
    bg-gray-200 dark:bg-gray-800 
    flex justify-center items-center
  "
          >
            <img
              src={exp.icon}
              alt={exp.company_name}
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />
          </div>

          {/* Title + Company */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-tight">
              {exp.title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              {exp.company_name}
            </p>
          </div>
        </div>

        {/* Date */}
        <p className="text-blue-600 dark:text-blue-400 mt-2 font-medium text-sm">
          {exp.date}
        </p>

        {/* Points */}
        <ul className="hidden md:block list-disc ml-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
          {exp.points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
