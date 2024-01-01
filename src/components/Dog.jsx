import {
  Environment,
  Grid,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  shaderMaterial,
} from "@react-three/drei";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import ShowPlayBox from "./ShowPlayBox";
import PlayStopBtn from "./PlayStopBtn";
import Hireme from "./Features";
import React from "react";
import { IoAnalyticsOutline, IoFlameOutline, IoPower } from "react-icons/io5";
import { Link } from "react-router-dom";
import TextLight from "./TextLight";
import LightIcon from "./LightIcon";
import ShowFeatures from "./ShowFeatures";
import Features from "./Features";
import Header from "./Header";

const Dog = () => {
  const [playing, setPlaying] = useState(false);
  const [showPlaybox, setShowPlaybox] = useState(false);
  const [animation, setAnimation] = useState("Idle");
  const [selected, setSelected] = useState(null);
  const [showFeatures, setShowFeatures] = useState(false);
  const [cellColor, setCellColor] = useState(null);
  const [sectionColor, setSectionColor] = useState(null);
  const [backgroundType, setBackgroundType] = useState("Grid");
  const [showSparkles, setShowSparkles] = useState(false);

  const handleAnimationChange = (newAnimation) => {
    setAnimation(newAnimation);
    setPlaying(true);
    setSelected(newAnimation);
  };

  const handleStop = () => {
    setPlaying(false);
    setSelected(null);
  };

  const handleColorChange = (event) => {
    const cellColor = event.target.value;
    setCellColor(cellColor);
  };

  const handleSectionColorChange = (e) => {
    const sectionColor = e.target.value;
    setSectionColor(sectionColor);
  };

  const handleBackgroundTypeChange = (selectedType) => {
    setBackgroundType(selectedType);
  };

  const handleSparkleToggle = () => {
    setShowSparkles(!showSparkles);
  };

  return (
    <>
      <Header handleSparkleToggle={handleSparkleToggle} />
      <ShowPlayBox
        setPlaying={setPlaying}
        handleAnimationChange={handleAnimationChange}
        showPlaybox={showPlaybox}
        setShowPlaybox={setShowPlaybox}
        selected={selected}
        setSelected={setSelected}
      />

      <ShowFeatures
        showFeatures={showFeatures}
        setShowFeatures={setShowFeatures}
        handleColorChange={handleColorChange}
        handleSectionColorChange={handleSectionColorChange}
        handleBackgroundTypeChange={handleBackgroundTypeChange}
        backgroundType={backgroundType}
        cellColor={cellColor}
        sectionColor={sectionColor}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Canvas
          style={{
            height: "500px",
            width: "100%",
            border: "20px solid #050c0c",
            borderRadius: "25px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "rgba(255, 255, 255, 0.1) 0px 2px 2px",
          }}
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 7] }}
        >
          <ambientLight />
          <directionalLight />
          <OrbitControls
            enableDamping={true}
            // maxAzimuthAngle={Math.PI / 2}
            // minAzimuthAngle={-Math.PI / 2}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          {showSparkles && (
            <Sparkles
              count={4000}
              speed={0.3}
              opacity={1}
              size={1}
              scale={[10, 10, 10]}
            />
          )}
          <Model
            animation={animation}
            playing={playing}
            setPlaying={setPlaying}
          />
          {backgroundType === "Grid" && (
            <Grid
              args={[20, 20]}
              position={[0, -1, 0]}
              cellSize={0.25}
              cellColor={cellColor || "black"}
              sectionSize={0.5}
              sectionColor={sectionColor || "red"}
              fadeDistance={15}
              fadeStrength={0.75}
            />
          )}
          {backgroundType === "Environment" && (
            <Environment background files="./model/playground_2k.hdr" />
          )}
        </Canvas>
      </div>
      <PlayStopBtn
        // selected={selected}
        // setSelected={setSelected}
        showPlaybox={showPlaybox}
        setShowPlaybox={setShowPlaybox}
        handleStop={handleStop}
      />

      <Features setShowFeatures={setShowFeatures} />
    </>
  );
};

export default Dog;
