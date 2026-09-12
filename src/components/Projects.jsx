import React from "react";
import { BsGithub } from "react-icons/bs";

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

        <div className="flex flex-col items-center justify-center w-full gap-4 px-8 pb-4 md:px-24 lg:px-36 xl:px-72">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full gap-4 pb-2 dark:text-[#F9EEE8]">
              <hr className="w-full opacity-30" />
              <p className="opacity-30">✦</p>
              <hr className="w-full opacity-30" />
            </div>

            <div className="flex flex-row items-center justify-start w-full gap-4 pb-4">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <div className="flex flex-row items-center justify-between w-full">
                  <h2 className="text-2xl font-bold text-left md:text-xl lg:text-2xl xl:text-3xl font-antonio text-[#31302D] dark:text-[#C6BF8B]">
                    ArtDumpster*
                  </h2>

                  <div className="flex flex-row items-center justify-center gap-4">
                    <BsGithub className="size-6 text-[#31302D] dark:text-[#C6BF8B]" />
                    <button className="font-mono text-xs px-2 border  text-[#31302D] dark:text-[#C6BF8B]">
                      Live
                    </button>
                  </div>
                </div>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
                  Web Application
                </p>
              </div>
            </div>

            <div className=" flex flex-col items-start justify-center opacity-60 gap-2 dark:text-[#F9EEE8]">
              <p className="font-mono text-xs font-light">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a ultrices felis. Cras condimentum, dui vel ullamcorper
                fermentum, nunc augue fringilla nisi, sed vulputate libero metus
                viverra quam.
              </p>
              <p className="font-mono text-xs font-light">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a ultrices felis.
              </p>
              <p className="font-mono text-xs font-light">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a ultrices felis. Cras condimentum, dui vel ullamcorper
                fermentum, nunc augue fringilla nisi.
              </p>
            </div>

            <div className="flex flex-row flex-wrap items-start w-full gap-2 pt-4 text-center opacity-60">
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                PostgreSQL
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Node.js
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Express.jx
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                React
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Figma
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full gap-4 pb-2 dark:text-[#F9EEE8]">
              <hr className="w-full opacity-30" />
              <p className="opacity-30">✦</p>
              <hr className="w-full opacity-30" />
            </div>

            <div className="flex flex-row items-center justify-start w-full gap-4 pb-4">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <div className="flex flex-row items-center justify-between w-full">
                  <h2 className="text-2xl font-bold text-left md:text-xl lg:text-2xl xl:text-3xl font-antonio text-[#31302D] dark:text-[#C6BF8B]">
                    CGWCEISC Inventory System
                  </h2>

                  <div className="flex flex-row items-center justify-center gap-4">
                    <BsGithub className="size-6 text-[#31302D] dark:text-[#C6BF8B]" />
                    <button className="font-mono text-xs px-2 border  text-[#31302D] dark:text-[#C6BF8B]">
                      Private
                    </button>
                  </div>
                </div>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
                  Web Application
                </p>
              </div>
            </div>

            <div className=" flex flex-col items-start justify-center opacity-60 gap-2 dark:text-[#F9EEE8]">
              <p className="font-mono text-xs font-light">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a ultrices felis. Cras condimentum, dui vel ullamcorper
                fermentum, nunc augue fringilla nisi, sed vulputate libero metus
                viverra quam.
              </p>
              <p className="font-mono text-xs font-light">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a ultrices felis.
              </p>
              <p className="font-mono text-xs font-light">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a ultrices felis. Cras condimentum, dui vel ullamcorper
                fermentum, nunc augue fringilla nisi.
              </p>
            </div>

            <div className="flex flex-row flex-wrap items-start w-full gap-2 pt-4 text-center opacity-60">
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                MySQL
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Node.js
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Express.js
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                React
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Figma
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full gap-4 pb-2 dark:text-[#F9EEE8]">
              <hr className="w-full opacity-30" />
              <p className="opacity-30">✦</p>
              <hr className="w-full opacity-30" />
            </div>

            <div className="flex flex-row items-center justify-start w-full gap-4 pb-4">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <div className="flex flex-row items-center justify-between w-full">
                  <h2 className="text-2xl font-bold text-left md:text-xl lg:text-2xl xl:text-3xl font-antonio text-[#31302D] dark:text-[#C6BF8B]">
                    Plantitotita
                  </h2>

                  <div className="flex flex-row items-center justify-center gap-4">
                    <BsGithub className="size-6 text-[#31302D] dark:text-[#C6BF8B]" />
                    <button className="font-mono text-xs px-2 border  text-[#31302D] dark:text-[#C6BF8B]">
                      Private
                    </button>
                  </div>
                </div>
                <p className="font-mono text-xs font-light lg:text-lg xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
                  Mobile Application
                </p>
              </div>
            </div>

            <div className=" flex flex-col items-start justify-center opacity-60 gap-2 dark:text-[#F9EEE8]">
              <p className="font-mono text-xs font-light">
                • Assigned as Project Manager for a fourth-year capstone
                project, overseeing development schedules, module planning,
                documentation, and team coordination.
              </p>
              <p className="font-mono text-xs font-light">
                • Created wireframes and interactive prototypes in Figma to
                support user-centered design.
              </p>
              <p className="font-mono text-xs font-light">
                • Assisted in mobile application development using Java and XML
                in Android Studio.
              </p>
            </div>

            <div className="flex flex-row flex-wrap items-start w-full gap-2 pt-4 pb-8 text-center opacity-60">
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Android Studio
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Java
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Firebase
              </p>
              <p className="px-1 md:px-2 text-xs border text-[#31302D] dark:text-[#F9EEE8] font-mono">
                Figma
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
