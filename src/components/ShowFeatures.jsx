import React, { useState } from "react";
import { IoPower } from "react-icons/io5";
import ColorPicker from "./ColorPicker";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const ShowFeatures = ({
  showFeatures,
  setShowFeatures,
  handleColorChange,
  handleSectionColorChange,
  handleBackgroundTypeChange,
  backgroundType,
  cellColor,
  sectionColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
    handleBackgroundTypeChange(selectedValue);
    setIsOpen(false);
  };
  return (
    <>
      {showFeatures && (
        <div className="z-10 absolute top-1/2  md:right-0 transform  -translate-y-1/2 w-[350px] h-auto boxBg p-5 rounded-md">
          <IoPower
            onClick={() => {
              setShowFeatures(false);
            }}
            className="text-end text-red-700 hover:text-[#f00] absolute right-8 mt-1 cursor-pointer"
          />
          <p className="text-white text-center text-lg font-bold flex items-center justify-center gap-2">
            Choose Colors
          </p>
          <ColorPicker
            label="Choose cell color"
            id="colorPicker"
            name="color"
            onChange={handleColorChange}
          />

          <ColorPicker
            label="Choose section color"
            id="sectionColorPicker"
            name="color"
            onChange={handleSectionColorChange}
          />
          <div className="mt-4 flex items-center justify-between">
            <label className="text-white">Choose background:</label>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between gap-2 px-4 w-[130px] h-10 rounded-md text-indigo-50 bg-red-700 hover:bg-red-800 transition-colors"
              >
                <span className="font-medium text-sm">{backgroundType}</span>
                <motion.span
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                >
                  <FiChevronDown />
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0, translateX: "-50%" }}
                    className="absolute top-[39px] w-full left-16 bg-white shadow-lg rounded-md"
                  >
                    <motion.li
                      onClick={() => handleSelect("Grid")}
                      whileHover={{ backgroundColor: "#edf2f7" }}
                      className="w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-red-200 text-red-700 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      Grid
                    </motion.li>
                    <motion.li
                      onClick={() => handleSelect("Environment")}
                      whileHover={{ backgroundColor: "#edf2f7" }}
                      className="w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-red-200 text-red-700 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      3D environment
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowFeatures;
