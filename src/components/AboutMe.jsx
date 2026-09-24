import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-start w-full min-h-screen bg-[#F9EEE8] dark:bg-[#31302D] gap-4">
        <div className="flex flex-col gap-4 px-8 py-4 xl:gap-8 md:px-24 md:py-8 lg:px-36 lg:py-12 xl:px-72 xl:py-16 2xl:px-168">
          <h1 className="font-antonio  font-bold text-3xl lg:text-4xl xl:text-5xl text-[#31302D] dark:text-[#F9EEE8]">
            Who I am.
          </h1>
          <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
            A Computer Science graduate, software developer, and digital artist
            who enjoys turning ideas into functional and meaningful experiences.
          </p>
        </div>

        <div className="flex flex-col gap-4 px-8 py-4 md:px-24 lg:px-36 xl:px-72 2xl:px-168 dark:text-[#F9EEE8]">
          <div className="flex flex-row items-center justify-center w-full gap-4 pb-2 dark:text-[#F9EEE8]">
            <hr className="w-full opacity-30" />
            <p className="opacity-30">✦</p>
            <hr className="w-full opacity-30" />
          </div>

          <div className="flex flex-col items-start gap-4 text-left xl:gap-8">
            <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
              I'm{" "}
              <span className="font-bold text-[#C6BF8B]">Jian Lee Ramos</span>,
              a Computer Science graduate and aspiring software developer from
              the Philippines.
            </p>
            <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
              I enjoy turning ideas into functional experiences through code,
              while bringing the same creativity and attention to detail that I
              developed through digital art. My interests are mainly focused on
              web development, particularly building interfaces that are both
              functional and enjoyable to use.
            </p>
            <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
              I'm naturally curious and enjoy learning by building. Whether I'm
              working on a web application, experimenting with a new technology,
              or creating artwork, I like understanding how things work and
              finding ways to make them better.
            </p>
            <p className="text-xs lg:text-base font-mono font-light text-left xl:text-lg text-[#31302D] dark:text-[#F9EEE8]">
              I'm currently growing my skills as a developer and looking for
              opportunities where I can continue learning, contribute to
              meaningful projects, and build software that people can actually
              use.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 py-4">
            <div className="flex flex-col items-start gap-2 lg:gap-8">
              <h2 className="text-2xl font-bold text-left md:text-2xl lg:text-4xl xl:text-5xl font-antonio text-[#31302D] dark:text-[#C6BF8B]">
                My Tech Stack.
              </h2>
              <p className="font-mono text-xs lg:text-base font-light text-[#31302D] dark:text-[#F9EEE8]">
                Technologies I often use to turn ideas into working
                applications.
              </p>
            </div>

            <div className="flex flex-col items-start font-mono text-xs lg:text-base gap-2 text-[#31302D] dark:text-[#F9EEE8]">
              <h2 className="font-bold">Languanges:</h2>

              <div className="flex flex-wrap items-start gap-2 ">
                <p className="px-2 border">Javascript</p>
                <p className="px-2 border">Java</p>
                <p className="px-2 border">Python</p>
              </div>
            </div>

            <div className="flex flex-col items-start font-mono text-xs lg:text-base gap-2 text-[#31302D] dark:text-[#F9EEE8]">
              <h2 className="font-bold">Frontend:</h2>

              <div className="flex flex-wrap items-start gap-2">
                <p className="px-2 border">React</p>
                <p className="px-2 border">Tailwind CSS</p>
                <p className="px-2 border">HTML</p>
                <p className="px-2 border">CSS</p>
              </div>
            </div>

            <div className="flex flex-col items-start font-mono text-xs lg:text-base gap-2 text-[#31302D] dark:text-[#F9EEE8]">
              <h2 className="font-bold">Backend:</h2>

              <div className="flex flex-wrap items-start gap-2">
                <p className="px-2 border">Node.js</p>
                <p className="px-2 border">Express</p>
                <p className="px-2 border">PostgreSQL</p>
                <p className="px-2 border">MySQL</p>
              </div>
            </div>

            <div className="flex flex-col items-start font-mono text-xs lg:text-base gap-2 text-[#31302D] dark:text-[#F9EEE8]">
              <h2 className="font-bold">Tools & Platforms:</h2>

              <div className="flex flex-wrap items-start gap-2">
                <p className="px-2 border">Figma</p>
                <p className="px-2 border">Postman</p>
                <p className="px-2 border">Github</p>
                <p className="px-2 border">VS Code</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 py-4">
            <div className="flex flex-col items-start gap-2 lg:gap-8">
              <h2 className="text-2xl font-bold text-left md:text-2xl lg:text-4xl xl:text-5xl font-antonio text-[#31302D] dark:text-[#C6BF8B]">
                Beyond the code.
              </h2>
              <p className="font-mono text-xs lg:text-base font-light text-[#31302D] dark:text-[#F9EEE8]">
                The interests and creative work that shape how I think and
                create.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold font-antonio text-base lg:text-lg text-[#31302D] dark:text-[#C6BF8B]">
                  Art influences
                </h2>
                <p className="font-mono text-xs lg:text-sm">
                  Artists whose work inspires how I create.
                </p>
              </div>

              <div className="flex flex-row flex-wrap items-start gap-2 font-mono text-xs lg:gap-4 lg:text-sm">
                <p className="px-2 border">Yun Ikwon</p>
                <p className="px-2 border">Masashi Kishimoto</p>
                <p className="px-2 border">Claude Monet</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold font-antonio text-base lg:text-lg text-[#31302D] dark:text-[#C6BF8B]">
                  Anime fan
                </h2>
                <p className="font-mono text-xs lg:text-sm">
                  Stories and worlds I keep coming back to.
                </p>
              </div>

              <div className="flex flex-row flex-wrap items-start gap-2 font-mono text-xs lg:gap-4 lg:text-sm">
                <p className="px-2 border">Naruto</p>
                <p className="px-2 border">Mob Psycho 100</p>
                <p className="px-2 border">Daily Lives of High School Boys</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold font-antonio text-base lg:text-lg text-[#31302D] dark:text-[#C6BF8B]">
                  Hip-hop Head
                </h2>
                <p className="font-mono text-xs lg:text-sm">
                  The artists that stay in my rotation.
                </p>
              </div>

              <div className="flex flex-row flex-wrap items-start gap-2 font-mono text-xs lg:gap-4 lg:text-sm">
                <p className="px-2 border">Kendrick Lamar</p>
                <p className="px-2 border">Denzel Curry</p>
                <p className="px-2 border">$uicideboy$</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold font-antonio text-base lg:text-lg text-[#31302D] dark:text-[#C6BF8B]">
                  Gamer
                </h2>
                <p className="font-mono text-xs lg:text-sm">
                  Games I keep coming back to..
                </p>
              </div>

              <div className="flex flex-row flex-wrap items-start gap-2 font-mono text-xs lg:gap-4 lg:text-sm">
                <p className="px-2 border">Tekken 8</p>
                <p className="px-2 border">No Man's Sky</p>
                <p className="px-2 border">Dota 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
