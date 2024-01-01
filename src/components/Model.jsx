import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Model = ({ animation, playing, setPlaying }) => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  //   console.log(model);
  console.log(animations);

  useEffect(() => {
    if (animation && playing && animations.actions[animation]) {
      animations.actions[animation].play();
    }

    return () => {
      if (animation && animations.actions[animation]) {
        animations.actions[animation].stop();
      }
    };
  }, [animation, animations.actions, setPlaying, playing]);

  return (
    <>
      <primitive
        position-y={-1}
        scale={[1, 1, 1]}
        object={model.scene}
      />
    </>
  );
};

export default Model;
