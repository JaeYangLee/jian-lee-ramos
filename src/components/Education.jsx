import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8]">
        <div className="px-8 py-4 flex flex-col gap-4">
          <h1 className="font-antonio  font-bold text-3xl text-[#31302D]">
            What I've learned.
          </h1>
          <p className="text-xs font-mono font-light text-left text-[#31302D]">
            The knowledge, skills, and experiences that have built my foundation
            in Computer Science and continue to shape me as a developer.
          </p>
        </div>
        <div className="px-8 py-4 flex flex-col gap-4">Education Section</div>
      </div>
    </>
  );
}

export default Projects;
