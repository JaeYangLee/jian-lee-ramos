import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8]">
        <div className="flex flex-col gap-4 px-8 py-4 xl:gap-8 md:px-24 md:py-8 lg:px-36 lg:py-12 xl:px-72 xl:py-16">
          <h1 className="font-antonio  font-bold text-3xl lg:text-4xl xl:text-5xl text-[#31302D]">
            What I create.
          </h1>
          <p className="text-xs font-mono font-light text-left text-[#31302D] xl:text-lg lg:text-base">
            Beyond code, I explore ideas through character design, background
            illustration, and visual storytelling.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-4 md:px-24 lg:px-36 xl:px-72">
          Artworks Section
        </div>
      </div>
    </>
  );
}

export default Projects;
