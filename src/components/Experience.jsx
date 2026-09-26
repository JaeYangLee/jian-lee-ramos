import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8] dark:bg-[#31302D]">
        <div className="flex flex-col gap-4 px-8 py-4 xl:gap-8 md:px-24 md:py-8 lg:px-36 lg:py-12 xl:px-72 xl:py-16 2xl:px-120 2xl:py-20">
          <h1 className="font-antonio  font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#31302D] dark:text-[#F9EEE8]">
            Where I've grown.
          </h1>
          <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg 2xl:text-xl text-[#31302D] dark:text-[#F9EEE8]">
            A look at the experiences that have shaped how I work, solve
            problems, collaborate, and continue to grow as a professional.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-4 px-8 py-4 md:px-24 lg:px-36 xl:px-72 2xl:px-120">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full gap-4 pb-2 dark:text-[#F9EEE8]">
              <hr className="w-full opacity-30" />
              <p className="opacity-30">✦</p>
              <hr className="w-full opacity-30" />
            </div>

            <div className="flex flex-row items-center justify-start w-full gap-4 pb-4">
              <div className="flex flex-col items-start justify-start gap-2">
                <h2 className="text-md font-bold text-left md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-antonio text-[#31302D] dark:text-[#C6BF8B]">
                  Department of Human Settlements and Urban Development (DHSUD)
                </h2>
                <p className="font-mono text-xs font-bold lg:text-lg xl:text-lg 2xl:text-xl text-[#31302D] dark:text-[#F9EEE8]">
                  Project Monitoring and Evaluation Officer I
                </p>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-lg 2xl:text-xl text-[#31302D] dark:text-[#F9EEE8]">
                  November 2025 - Present
                </p>
              </div>
            </div>

            <div className=" flex flex-col items-center justify-center opacity-60 gap-2 dark:text-[#F9EEE8]">
              <p className="font-mono text-xs 2xl:text-base font-light">
                • Supported the Office of the Assistant Secretary for Regional
                Operations and Administrative Services, supporting document
                monitoring, evaluation, and administrative operations.
              </p>
              <p className="font-mono text-xs 2xl:text-base font-light">
                • Supported the Zero Backlogs Program (ZBP) initiated by the
                Office of the Secretary, contributing to a 93.7% reduction in
                Regional Office backlogs from 252 to 16 documents from 2025 to
                present.
              </p>
              <p className="font-mono text-xs 2xl:text-base font-light">
                • Managed the evaluation, monitoring, and routing of an average
                of 372 incoming documents per month, maintaining consistent
                processing across Regional Operations, Disaster Response, and
                Administrative Services.
              </p>
              <p className="font-mono text-xs 2xl:text-base font-light">
                • Conducted daily monitoring of Regional Office HOA and HRED
                cases involving housing applications and complaints,
                coordinating and communicating with regional office focal
                persons to track case status and facilitate appropriate action.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full gap-4 pb-2 dark:text-[#F9EEE8] ">
              <hr className="w-full opacity-30" />
              <p className="opacity-30">✦</p>
              <hr className="w-full opacity-30" />
            </div>

            <div className="flex flex-row items-center justify-start w-full gap-2 pb-4">
              <div className="flex flex-col items-start justify-start gap-2">
                <h2 className="text-md font-bold text-left md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-antonio text-[#31302D] dark:text-[#C6BF8B]">
                  Philippine Coast Guard - CGWCEISC
                </h2>
                <p className="font-mono text-xs font-bold lg:text-lg xl:text-lg 2xl:text-xl text-[#31302D] dark:text-[#F9EEE8]">
                  Full Stack Developer Intern
                </p>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-lg 2xl:text-xl text-[#31302D] dark:text-[#F9EEE8]">
                  February 2025 - May 2025
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start w-full opacity-60 gap-2 pb-4 dark:text-[#F9EEE8]">
              <p className="font-mono text-xs 2xl:text-base font-light">
                • Initiated the development of CGWCEISC Inventory System laid
                the foundation for improvement of CGWCEISC’s asset management
                process.
              </p>
              <p className="font-mono text-xs 2xl:text-base font-light">
                • Successfully led the project through full SDLC to design and
                develop a web-based Inventory Management System for the
                Philippine Coast Guard – CGWCEISC in an Agile environment.
              </p>
              <p className="font-mono text-xs 2xl:text-base font-light">
                • Developed and maintained scalable, user-centered web
                interfaces using React.js, Tailwind CSS, and Figma to enhance
                functionality and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
