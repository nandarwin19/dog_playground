import { useState } from "react";
import { IoPower } from "react-icons/io5";
import { buttonLinks2, buttonLinks1 } from "./utils";

const ShowPlayBox = ({
  handleAnimationChange,
  showPlaybox,
  setShowPlaybox,
  selected,
  setSelected,
  setPlaying,
}) => {
  return (
    <>
      {showPlaybox && (
        <div className="z-10 absolute top-1/2 transform -translate-y-1/2 w-[350px] h-auto boxBg p-5 rounded-md">
          <IoPower
            onClick={() => {
              setShowPlaybox(false), setPlaying(false), setSelected(null);
            }}
            className="text-end text-red-700 hover:text-[#f00] absolute right-8 mt-1 cursor-pointer"
          />
          <p className="text-white text-center font-bold flex items-center justify-center gap-2">
            You can <span className="text-[#f00] name">Play</span> now!
          </p>

          <div className="flex items-center justify-between gap-2 pt-4">
            <div className="flex flex-col gap-1">
              {buttonLinks1.map((btnLink1) => (
                <button
                  className={`text-white w-28 h-10 bg-[#000000] flex items-center gap-[6px] justify-center border-[0.5px] border-[#ffffff54] my-1 shadow-xl text-[13px] cursor-pointer rounded-md ${
                    selected === btnLink1.id ? "selected" : ""
                  }`}
                  key={btnLink1.id}
                  onClick={() => {
                    handleAnimationChange(btnLink1.id);
                    setSelected(btnLink1.id);
                  }}
                >
                  {btnLink1.icon}
                  {btnLink1.title}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              {buttonLinks2.map((btnLink2) => (
                <button
                  className={`text-white w-28 h-10 bg-[#000000] flex items-center gap-[6px] justify-center border-[0.5px] border-[#ffffff54] my-1 shadow-xl text-[13px] cursor-pointer rounded-md ${
                    selected === btnLink2.id ? "selected" : ""
                  }`}
                  key={btnLink2.id}
                  onClick={() => {
                    handleAnimationChange(btnLink2.id);
                    setSelected(btnLink2.id);
                  }}
                >
                  {btnLink2.icon}
                  {btnLink2.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowPlayBox;
