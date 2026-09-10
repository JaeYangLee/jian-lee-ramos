import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8]">
        <div className="flex flex-col gap-4 px-8 py-4 xl:gap-8 md:px-24 md:py-8 lg:px-36 lg:py-12 xl:px-72 xl:py-16">
          <h1 className="font-antonio  font-bold text-3xl lg:text-4xl xl:text-5xl text-[#31302D]">
            Where I've grown.
          </h1>
          <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg text-[#31302D]">
            A look at the experiences that have shaped how I work, solve
            problems, collaborate, and continue to grow as a professional.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-4 px-8 py-4 md:px-24 lg:px-36 xl:px-72">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full gap-4 pb-2">
              <hr className="w-full opacity-30" />
              <p className="opacity-30">✦</p>
              <hr className="w-full opacity-30" />
            </div>

            <div className="flex flex-row items-center justify-start w-full gap-4 pb-2">
              <div className="flex flex-col items-start justify-start gap-2">
                <h2 className="pb-4 text-lg font-bold text-left md:text-xl lg:text-2xl xl:text-3xl font-antonio text-[#31302D]">
                  ✦ Department of Human Settlements and Urban Development
                  (DHSUD)
                </h2>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-xl text-[#31302D]">
                  Project Monitoring and Evaluation Officer I
                </p>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-xl text-[#31302D]">
                  Nov 2025 - Present
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full gap-4 pb-2">
              <hr className="w-full opacity-30" />
              <p className="opacity-30">✦</p>
              <hr className="w-full opacity-30" />
            </div>

            <div className="flex flex-row items-center justify-start w-full gap-4 pb-2">
              <div className="flex flex-col items-start justify-start gap-2">
                <h2 className="pb-4 text-lg font-bold text-left md:text-xl lg:text-2xl xl:text-3xl font-antonio text-[#31302D]">
                  ✦ Philippine Coast Guard - CGWCEISC
                </h2>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-xl text-[#31302D]">
                  Full Stack Developern Intern
                </p>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-xl text-[#31302D]">
                  February 2025 - May 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
