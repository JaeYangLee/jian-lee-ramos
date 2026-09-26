import { BsDownload } from "react-icons/bs";

function DownloadCV() {
  return (
    <>
      <div className="hidden md:flex fixed right-0 top-0 p-4 2xl:p-4 z-70  ">
        <button className="flex flex-row items-center justify-center gap-2 p-2 px-4 text-xs  text-[#F9EEE8] rounded-xl bg-[#31302D] dark:bg-[#1d1d1b] hover:bg-[#1d1d1b]">
          Download My Résumé <BsDownload />
        </button>
      </div>
    </>
  );
}

export default DownloadCV;
