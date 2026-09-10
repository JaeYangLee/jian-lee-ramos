import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8]">
        <div className="px-8 py-4 flex flex-col gap-4">
          <h1 className="font-antonio  font-bold text-3xl text-[#31302D]">
            Who I am.
          </h1>
          <p className="text-xs font-mono font-light text-left text-[#31302D]">
            A Computer Science graduate, software developer, and digital artist
            who enjoys turning ideas into functional and meaningful experiences.
          </p>
        </div>
        <div className="px-8 py-4 flex flex-col gap-4">About me Section</div>
      </div>
    </>
  );
}

export default Projects;
