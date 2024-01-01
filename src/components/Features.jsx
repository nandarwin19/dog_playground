import React from "react";
import { IoAnalyticsOutline, IoFlameOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import TextLight from "./TextLight";
import LightIcon from "./LightIcon";

const Features = ({ setShowFeatures }) => {
  return (
    <button
      className="absolute -bottom-8 right-0"
      onClick={() => setShowFeatures(true)}
    >
      <div className="absolute bottom-0 right-0 pb-8">
        <div className="w-28 h-10 py-2 flex items-center justify-between rounded-md gap-1 px-4 border border-none text-sm font-medium text-white bg-[#b50000] focus:outline-none">
          <p className="text-white font-semibold">Features</p>

          <LightIcon name="IoAnalyticsOutline" color="#fff" fontSize="xl" />
        </div>
      </div>
    </button>
  );
};

export default Features;
