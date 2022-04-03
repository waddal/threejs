const Sphere = () => {
  // --> https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry

  return (
    <mesh position={[-5, 0, 5]}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Sphere;
