import React from "react";

function SideBar() {
  return (
    <>
      <div className="fixed right-0 h-screen text-center z-60 md:w-8 lg:w-12 2xl:w-20">
        <section className="fixed top-0 py-4 text-xs lg:text-base xl:text-sm bg-accents md:w-8 md:font-bold text-secondary lg:w-12 md:border-l-1 md:border-secondary 2xl:w-20 2xl:text-2xl">
          <p>ジ</p>
          <p>ア</p>
          <p>ン</p>
          <br />
          <p>リ</p>
          <p>ー</p>
        </section>
        <section className="py-[25vh] 2xl:py-[36vh] text-xs lg:text-base xl:text-sm bg-secondary text-primary md:border-l-1 border-primary font-mono 2xl:w-20 2xl:text-2xl">
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
        </section>
        <section className="fixed bottom-0 py-4 font-mono text-xs font-bold bg-primary md:w-8 lg:w-12 md:border-l-1 md:border-secondary 2xl:w-20">
          <p className="md:hidden">0</p>
          <p className="items-center justify-center hidden md:flex md:text-sm lg:text-base xl:text-sm 2xl:text-2xl">
            00
          </p>
        </section>
      </div>
    </>
  );
}

export default SideBar;
