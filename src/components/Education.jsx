import imgUrl from "../assets/jian-grad-pic.jpeg";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8] dark:bg-[#31302D] dark:text-[#F9EEE8] ">
        <div className="flex flex-col gap-4 px-8 py-4 xl:gap-8 md:px-24 md:py-8 lg:px-36 lg:py-12 xl:px-72 xl:py-16 2xl:px-120 2xl:py-20">
          <h1 className="font-antonio  font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#31302D] dark:text-[#F9EEE8]">
            What I've learned.
          </h1>
          <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg 2xl:text-xl text-[#31302D] dark:text-[#F9EEE8]">
            The knowledge, skills, and experiences that have built my foundation
            in Computer Science and continue to shape me as a developer.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-4 px-8 py-4 lg:items-start lg:justify-start 2xl:items-center 2xl:justify-center lg:gap-12 md:gap-12 md:flex-row md:px-24 lg:px-36 xl:px-72 2xl:px-120">
          <div className="">
            <img
              className="size-64 lg:size-94 xl:size-106 2xl:size-120 object-cover rounded-lg shadow-[#31302D] dark:shadow-black  shadow-lg"
              src={imgUrl}
              alt="jian-grad-pic"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 md:items-start md:justify-start">
            <div className="flex flex-row items-center justify-center w-full gap-4 pb-2">
              <hr className="w-full opacity-30" />
              <p className="opacity-30">✦</p>
              <hr className="w-full opacity-30" />
            </div>

            <h1 className="flex text-xl font-bold text-center md:hidden font-antonio text-[#31302D] dark:text-[#C6BF8B]">
              B.S. Major in Computer Science
            </h1>
            <h1 className="hidden text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:flex font-antonio text-[#31302D] dark:text-[#C6BF8B]">
              B.S. Major in Computer Science
            </h1>
            <p className="font-mono text-sm font-light text-center xl:text-lg 2xl:text-xl text-[#31302D] opacity-60 dark:text-[#F9EEE8]">
              S.Y. 2021-2025
            </p>
            <p className="font-mono text-sm font-light text-center xl:text-lg 2xl:text-xl text-[#31302D] opacity-60 dark:text-[#F9EEE8]">
              STI College San Jose Del Monte
            </p>
            <p className="pb-4 font-mono text-sm font-light text-center xl:text-lg 2xl:text-xl text-[#31302D] dark:text-[#F9EEE8] opacity-60">
              Bulacan, Philippines
            </p>
            <hr className="w-full opacity-30" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
