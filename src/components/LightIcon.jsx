import React from "react";
import PropTypes from "prop-types";
import { LuDog } from "react-icons/lu";
import { MdOutlineTrackChanges } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";

const LightIcon = ({ name, color, fontSize }) => {
  const iconStyle = {
    filter: `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 10px ${color}) drop-shadow(0 0 20px ${color}) drop-shadow(0 0 30px ${color}) drop-shadow(0 0 50px ${color})`,
    color: color,
  };

  return (
    <div className={`lightIcon text-xl`} style={iconStyle}>
      {name === "MdOutlineTrackChanges" && <MdOutlineTrackChanges />}
      {name === "LuDog" && <LuDog />}
      {name === "IoAnalyticsOutline" && <IoAnalyticsOutline />}

      {name === "Play" && "Play"}
    </div>
  );
};

LightIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};

export default LightIcon;
