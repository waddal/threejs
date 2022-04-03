const Box = () => {
  // --> https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry

  return (
    <mesh position={[0, 0, 5]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="#CF1F55" />
    </mesh>
  );
};

export default Box;
