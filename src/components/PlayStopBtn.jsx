import React from "react";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";

const PlayStopBtn = ({ setShowPlaybox, showPlaybox, handleStop }) => {
  const Play = (
    <>
      <p>Play</p>
      <FaPlayCircle />
    </>
  );

  const Close = (
    <>
      <p>Close</p>
      <FaStopCircle />
    </>
  );

  return (
    <button
      onClick={() => {
        setShowPlaybox((prevShowPlaybox) => !prevShowPlaybox);
        if (showPlaybox) {
          handleStop();
        }
      }}
      className="gap-[5px] border-red-600 font-semibold text-white w-28 h-10 rounded-md bg-[#bb0000] hover:bg-[#d10404] flex items-center justify-center border-[0.5px]   my-1 shadow-xl text-[13px] cursor-pointer"
    >
      {showPlaybox ? Close : Play}
    </button>
  );
};

export default PlayStopBtn;
