import { useState } from 'react';

const Cylinder = () => {
  // --> https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry

  // Lets add a click event to this object...
  const [isRed, setIsRed] = useState(true);

  const clickHandler = () => {
    if (isRed) {
      setIsRed(false);
    } else {
      setIsRed(true);
    }
  };

  return (
    <mesh position={[5, 0, 5]} onClick={clickHandler}>
      <cylinderBufferGeometry attach="geometry" args={[1, 1, 5, 32]} />
      <meshStandardMaterial
        attach="material"
        color={isRed ? "#CF1F55" : "#808080"}
      />
    </mesh>
  );
};

export default Cylinder;
