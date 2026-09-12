import React from "react";

function SideBar() {
  return (
    <>
      <div className="hidden fixed left-0 md:flex flex-col justify-between min-h-full bg-[#31302D] dark:bg-[#1d1d1b] z-70 dark:border-r dark:border-[#F9EEE8]">
        <div className="flex flex-col items-center justify-center p-2 text-xs lg:text-sm bg-[#C6BF8B] font-mono font-bold dark:bg-[#1d1d1b] dark:text-[#F9EEE8] dark:border-b dark:border-[#F9EEE8]">
          <p>ジ</p>
          <p>ア</p>
          <p>ン</p>
          <br />
          <p>リ</p>
          <p>ー</p>
        </div>

        <div className="flex flex-col items-center justify-center p-2 lg:p-4 text-xs lg:text-sm text-[#F9EEE8] font-mono h-full ">
          <p>1</p>
          <p>4</p>
          <p>.</p>
          <p>8</p>
          <p>1</p>
          <p>4</p>
          <p>3</p>
          <p>°</p>
          <br />
          <p>N</p>
          <p>/</p>
          <br />
          <p>1</p>
          <p>2</p>
          <p>1</p>
          <p>.</p>
          <p>0</p>
          <p>7</p>
          <p>2</p>
          <p>5</p>
          <p>°</p>
          <br />
          <p>E</p>
        </div>

        <div className="flex flex-col items-center justify-center p-2 text-xs bg-[#F9EEE8] font-mono font-bold lg:text-sm dark:bg-[#1d1d1b] dark:text-[#F9EEE8] dark:border-t dark:border-[#F9EEE8]">
          <p>✦</p>
        </div>
      </div>
    </>
  );
}

export default SideBar;
