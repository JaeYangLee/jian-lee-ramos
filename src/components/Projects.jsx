import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8] dark:bg-[#31302D]">
        <div className="flex flex-col gap-4 px-8 py-4 xl:gap-8 md:px-24 md:py-8 lg:px-36 lg:py-12 xl:px-72 xl:py-16">
          <h1 className="font-antonio font-bold text-3xl lg:text-4xl xl:text-5xl text-[#31302D] dark:text-[#F9EEE8]">
            What I've built.
          </h1>
          <p className="text-xs font-mono font-light text-left lg:text-base xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
            As a Computer Science graduate, these are some of the projects where
            I turned ideas into working software, applied what I’ve learned, and
            had fun building along the way.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-4 md:px-24 lg:px-36 xl:px-72 dark:text-[#F9EEE8]">
          Project Section
        </div>
      </div>
    </>
  );
}

export default Projects;
