import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8]">
        <div className="px-8 py-4 flex flex-col gap-4">
          <h1 className="font-antonio  font-bold text-3xl text-[#31302D]">
            What I create.
          </h1>
          <p className="text-xs font-mono font-light text-left text-[#31302D]">
            Beyond code, I explore ideas through character design, background
            illustration, and visual storytelling.
          </p>
        </div>
        <div className="px-8 py-4 flex flex-col gap-4">Artworks Section</div>
      </div>
    </>
  );
}

export default Projects;
