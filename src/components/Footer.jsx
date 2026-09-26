import React from "react";
import { BsFillMoonFill } from "react-icons/bs";

function Footer({ darkMode, setTheme }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-8 dark:bg-[#1d1d1b]">
        <div className="flex flex-row items-center justify-between w-full font-mono xl:gap-8 px-4 md:px-24 lg:px-36 xl:px-72 2xl:px-80">
          <h3 className="flex md:hidden text-xs  text-[#F9EEE8] opacity-60">
            © 2026 Jian
          </h3>
          <h3 className="hidden md:flex text-xs 2xl:text-lg text-[#F9EEE8] opacity-60">
            © 2026 Jian Lee Ramos
          </h3>
          <h3 className="hidden md:flex text-xs 2xl:text-lg text-[#F9EEE8] opacity-60">
            Bulacan, Philippines
          </h3>
        </div>

        <div className="absolute right-0 px-8 md:px-4 lg:px-8 xl:px-12 opacity-60 hover:opacity-100 transition-all duration-300 active:opacity-60">
          <button
            onClick={() => setTheme(darkMode ? "light" : "dark")}
            className="p-2 border border-[#F9EEE8]"
          >
            <BsFillMoonFill className="text-[#F9EEE8] 2xl:size-4" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
