import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import MetalMap from '../assets/MetalMap.png';
import MetalNormalMap from '../assets/MetalNormalMap.png';


const Plane = () => {
  // --> https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry

  // Lets add a cutom texture & material...
  // Generate NormalMaps --> https://cpetry.github.io/NormalMap-Online/
  const [metalNormalMap, metalMap] = useLoader(TextureLoader, [
    MetalNormalMap,
    MetalMap,
  ]);

  return (
    <mesh position={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[25, 25]} />
      <meshStandardMaterial
        attach="material"
        map={metalMap}
        normalMap={metalNormalMap}
        metalness={0.5}
      />
    </mesh>
  );
};

export default Plane;
