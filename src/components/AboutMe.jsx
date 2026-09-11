import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8]">
        <div className="flex flex-col gap-4 px-8 py-4 xl:gap-8 md:px-24 md:py-8 lg:px-36 lg:py-12 xl:px-72 xl:py-16">
          <h1 className="font-antonio  font-bold text-3xl lg:text-4xl xl:text-5xl text-[#31302D]">
            Who I am.
          </h1>
          <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg text-[#31302D]">
            A Computer Science graduate, software developer, and digital artist
            who enjoys turning ideas into functional and meaningful experiences.
          </p>
        </div>

        <div className="flex flex-col gap-4 px-8 py-4 md:px-24 lg:px-36 xl:px-72">
          <h1>About Me Section</h1>
        </div>
      </div>
    </>
  );
}

export default Projects;
