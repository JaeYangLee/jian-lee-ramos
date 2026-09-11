import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-8">
        <div className="flex flex-row items-center justify-between w-full font-mono xl:gap-8 md:px-24 lg:px-36  xl:px-72 ">
          <h3 className="flex md:hidden text-xs text-[#F9EEE8] opacity-60">
            © 2026 Jian
          </h3>
          <h3 className="hidden md:flex text-xs text-[#F9EEE8] opacity-60">
            © 2026 Jian Lee Ramos
          </h3>
          <h3 className="text-xs text-[#F9EEE8] opacity-60">
            Bulacan, Philippines
          </h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
