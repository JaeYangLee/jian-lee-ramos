import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function PageOne() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#31302D] px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="w-full text-center md:text-left font-antonio text-[#C6BF8B] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold select-none">
            JIAN LEE RAMOS
          </h1>
          <div className="flex md:flex-row flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center md:justify-between h-full gap-4">
              <h2 className="font-antonio text-[#F9EEE8] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold select-none">
                FULLSTACK DEVELOPER
              </h2>

              <div className="flex flex-row items-center justify-center md:justify-start md:items-start w-full gap-4 xl:gap-8">
                <BsLinkedin className="size-5 md:size-6 lg:size-8 xl:size-9 text-[#F9EEE8] transition scale-y-90 " />
                <BsGithub className="size-5 md:size-6 lg:size-8 xl:size-9 text-[#F9EEE8]" />
                <BsGoogle className="size-5 md:size-6 lg:size-8 xl:size-9 text-[#F9EEE8]" />
                <BsInstagram className="size-5 md:size-6 lg:size-8 xl:size-9 text-[#F9EEE8]" />
              </div>
            </div>

            <img
              className="object-cover size-66 lg:size-83 xl:size-102 rounded-2xl shadow-[#C6BF8B] shadow-[8px_8px_0px_0px]"
              src="src/assets/jian-image-2.png"
              alt="jian-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageOne;
