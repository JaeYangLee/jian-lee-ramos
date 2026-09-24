import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import imgUrl from "../assets/jian-image-2.png";

function PageOne() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#31302D] dark:bg-[#1d1d1b] px-4">
        <div className="flex flex-col items-center justify-center gap-4 2xl:gap-8">
          <h1 className="w-full text-center md:text-left font-antonio text-[#C6BF8B] text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[192px] font-bold">
            JIAN LEE RAMOS
          </h1>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row ">
            <div className="flex flex-col items-center justify-center h-full gap-4 md:justify-between">
              <h2 className="font-antonio text-[#F9EEE8] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold select-none">
                FULLSTACK DEVELOPER
              </h2>

              <div className="flex flex-row items-center justify-center w-full gap-4 2xl:gap-12 md:justify-start md:items-start xl:gap-8">
                <a
                  className="hover:animate-shake 
                  origin-bottom transition-transform duration-300"
                  href="https://www.linkedin.com/in/jianleeramos/"
                  target="_blank"
                >
                  <BsLinkedin className="size-5 md:size-6 lg:size-8 xl:size-9 2xl:size-16 text-[#F9EEE8] active:text-[#645f5d] active:translate-1 active:origin-bottom transition:transform duration-50" />
                </a>

                <a
                  className="hover:animate-shake origin-bottom transition-transform duration-300"
                  href="https://github.com/JaeYangLee"
                  target="_blank"
                >
                  <BsGithub className="size-5 md:size-6 lg:size-8 xl:size-9 2xl:size-16 text-[#F9EEE8] active:text-[#958f8b] active:translate-1 active:origin-bottom transition:transform duration-50" />
                </a>

                <a
                  className="hover:animate-shake origin-bottom transition-transform duration-300"
                  href="ramosjianlee@gmail.com"
                >
                  <BsGoogle className="size-5 md:size-6 lg:size-8 xl:size-9 2xl:size-16 text-[#F9EEE8] active:text-[#958f8b] active:translate-1 active:origin-bottom transition:transform duration-50" />
                </a>

                <a
                  className="hover:animate-shake origin-bottom transition-transform duration-300"
                  href="https://www.instagram.com/jlanl33?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <BsInstagram className="size-5 md:size-6 lg:size-8 xl:size-9 2xl:size-16 text-[#F9EEE8] active:text-[#958f8b] active:translate-1 active:origin-bottom transition:transform duration-50" />
                </a>
              </div>
            </div>

            <img
              className="object-cover size-66 lg:size-83 xl:size-102 2xl:size-160 rounded-2xl shadow-[#C6BF8B] shadow-[8px_8px_0px_0px]"
              src={imgUrl}
              alt="jian-image"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#31302D] dark:bg-[#1d1d1b] p-8 xl:pb-20 md:px-24 lg:px-36 xl:px-72 2xl:px-168 gap-2">
        <div className="flex flex-col items-start justify-center">
          <p className="font-mono font-light text-left text-xs lg:text-base 2xl:text-2xl text-[#F9EEE8]">
            Hi there! I’m
            <span className="text-[#C6BF8B] font-bold "> Jian Lee</span> Welcome
            to my little corner of the web!
          </p>
          <p className="font-mono font-light text-left text-xs text-[#F9EEE8] lg:text-base 2xl:text-2xl">
            Here, you’ll get to explore the projects I’ve been working on, dive
            into my creative journey, and get to know me a bit better.
          </p>
          <p className="font-mono font-light text-left text-xs text-[#F9EEE8] lg:text-base 2xl:text-2xl">
            Feel free to look around and enjoy!
          </p>
        </div>
      </div>
    </>
  );
}

export default PageOne;
