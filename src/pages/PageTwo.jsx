import { useState } from "react";
import { MdMonitor } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi2";
import { FaPalette } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Artworks from "../components/Artworks";
import AboutMe from "../components/AboutMe";

function PageTwo() {
  const [activeSection, setActiveSection] = useState("projects");
  return (
    <>
      <div className="flex flex-col w-full h-full ">
        <div className="flex flex-row items-center justify-center pt-8 dark:bg-[#1d1d1b]">
          <ul className="flex-row items-center justify-between hidden w-full gap-4 px-24 font-bold lg:px-34 xl:px-70 2xl:px-168 md:flex font-antonio">
            <li
              onClick={() => setActiveSection("projects")}
              className={
                activeSection === "projects"
                  ? "p-2 2xl:p-4 rounded-t  bg-[#F9EEE8] dark:bg-[#31302D] dark:text-[#F9EEE8] text-[#31302D] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl shadow-[8px_8px_0px_0px] shadow-black transition-all origin-bottom duration-200 ease-out select-none"
                  : "relative p-2 rounded-t cursor-pointer text-[#F9EEE8] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl active:text-[#958f8b]  active:ease-in before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5  before:bg-[#F9EEE8] before:transition-all before:duration-200 before:ease-out hover:before:w-full active:before:w-0"
              }
            >
              PROJECTS
            </li>

            <li
              onClick={() => setActiveSection("experience")}
              className={
                activeSection === "experience"
                  ? "p-2 2xl:p-4 rounded-t  bg-[#F9EEE8] dark:bg-[#31302D] dark:text-[#F9EEE8] text-[#31302D] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl shadow-[8px_8px_0px_0px] shadow-black transition-all origin-bottom duration-200 ease-out select-none"
                  : "relative p-2 rounded-t cursor-pointer text-[#F9EEE8] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl active:text-[#958f8b]  active:ease-in before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5  before:bg-[#F9EEE8] before:transition-all before:duration-200 before:ease-out hover:before:w-full active:before:w-0"
              }
            >
              EXPERIENCE
            </li>

            <li
              onClick={() => setActiveSection("education")}
              className={
                activeSection === "education"
                  ? "p-2 2xl:p-4 rounded-t  bg-[#F9EEE8] dark:bg-[#31302D] dark:text-[#F9EEE8] text-[#31302D] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl shadow-[8px_8px_0px_0px] shadow-black transition-all origin-bottom duration-200 ease-out select-none"
                  : "relative p-2 rounded-t cursor-pointer text-[#F9EEE8] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl active:text-[#958f8b]  active:ease-in before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5  before:bg-[#F9EEE8] before:transition-all before:duration-200 before:ease-out hover:before:w-full active:before:w-0"
              }
            >
              EDUCATION
            </li>

            <li
              onClick={() => setActiveSection("artworks")}
              className={
                activeSection === "artworks"
                  ? "p-2 2xl:p-4 rounded-t  bg-[#F9EEE8] dark:bg-[#31302D] dark:text-[#F9EEE8] text-[#31302D] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl shadow-[8px_8px_0px_0px] shadow-black transition-all origin-bottom duration-200 ease-out select-none"
                  : "relative p-2 rounded-t cursor-pointer text-[#F9EEE8] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl active:text-[#958f8b]  active:ease-in before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5  before:bg-[#F9EEE8] before:transition-all before:duration-200 before:ease-out hover:before:w-full active:before:w-0"
              }
            >
              ARTWORKS
            </li>

            <li
              onClick={() => setActiveSection("aboutMe")}
              className={
                activeSection === "aboutMe"
                  ? "p-2 2xl:p-4 rounded-t  bg-[#F9EEE8] dark:bg-[#31302D] dark:text-[#F9EEE8] text-[#31302D] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl shadow-[8px_8px_0px_0px] shadow-black transition-all origin-bottom duration-200 ease-out select-none"
                  : "relative p-2 rounded-t cursor-pointer text-[#F9EEE8] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl active:text-[#958f8b]  active:ease-in before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5  before:bg-[#F9EEE8] before:transition-all before:duration-200 before:ease-out hover:before:w-full active:before:w-0"
              }
            >
              ABOUT ME
            </li>
          </ul>

          <ul className="flex flex-row items-center justify-between w-full px-6 md:hidden">
            <li
              onClick={() => setActiveSection("projects")}
              className={
                activeSection === "projects"
                  ? "p-2 rounded-t bg-[#F9EEE8] text-[#31302D] shadow-[8px_8px_0px_0px] shadow-black dark:bg-[#31302D] dark:text-[#F9EEE8]"
                  : "p-2 rounded-t cursor-pointer text-[#F9EEE8]"
              }
            >
              <MdMonitor className="size-6" />
            </li>

            <li
              onClick={() => setActiveSection("experience")}
              className={
                activeSection === "experience"
                  ? "p-2 rounded-t bg-[#F9EEE8] text-[#31302D] shadow-[8px_8px_0px_0px] shadow-black dark:bg-[#31302D] dark:text-[#F9EEE8]"
                  : "p-2 rounded-t cursor-pointer text-[#F9EEE8]"
              }
            >
              <IoMdBriefcase className="size-6" />
            </li>

            <li
              onClick={() => setActiveSection("education")}
              className={
                activeSection === "education"
                  ? "p-2 rounded-t bg-[#F9EEE8] text-[#31302D] shadow-[8px_8px_0px_0px] shadow-black dark:bg-[#31302D] dark:text-[#F9EEE8]"
                  : "p-2 rounded-t cursor-pointer text-[#F9EEE8]"
              }
            >
              <HiAcademicCap className="size-6" />
            </li>

            <li
              onClick={() => setActiveSection("artworks")}
              className={
                activeSection === "artworks"
                  ? "p-2 rounded-t bg-[#F9EEE8] text-[#31302D] shadow-[8px_8px_0px_0px] shadow-black dark:bg-[#31302D] dark:text-[#F9EEE8]"
                  : "p-2 rounded-t cursor-pointer text-[#F9EEE8]"
              }
            >
              <FaPalette className="size-6 " />
            </li>

            <li
              onClick={() => setActiveSection("aboutMe")}
              className={
                activeSection === "aboutMe"
                  ? "p-2 rounded-t bg-[#F9EEE8] text-[#31302D] shadow-[8px_8px_0px_0px] shadow-black dark:bg-[#31302D] dark:text-[#F9EEE8]"
                  : "p-2 rounded-t cursor-pointer text-[#F9EEE8]"
              }
            >
              <FaCircleInfo className="size-6 ]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full bg-[#F9EEE8]">
          {activeSection == "projects" && <Projects />}
          {activeSection == "experience" && <Experience />}
          {activeSection == "education" && <Education />}
          {activeSection == "artworks" && <Artworks />}
          {activeSection == "aboutMe" && <AboutMe />}
        </div>
      </div>
    </>
  );
}

export default PageTwo;
