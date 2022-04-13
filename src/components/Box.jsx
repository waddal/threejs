import { useState } from "react";

const Box = () => {
  // --> https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry
  const initialColor = "#CF1F55";
  const [color, setColor] = useState(initialColor);

  const handleDown = () => [setColor("#CCCCFF")];
  const handleUp = () => [setColor(initialColor)];

  return (
    <mesh
      position={[0, 0, 0]}
      onPointerUp={handleUp}
      onPointerDown={handleDown}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} border="black" />
    </mesh>
  );
};

export default Box;
