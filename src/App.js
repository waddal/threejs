// See following documentations:
// -- @react-three/fiber & @react-three/drei ---> https://docs.pmnd.rs/ 
// -- ThreeJS ----------------------------------> https://threejs.org/docs/index.html

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MapControls, OrbitControls, Sky, Stars } from '@react-three/drei';

// Import CSS
import './App.css';

// Import Meshes
import Box from './components/Box';
import Sphere from './components/Sphere';
import Cylinder from './components/Cylinder';
import Plane from './components/Plane';

function App() {
	return (
		<Canvas camera={{ position: [0, 0, 30], up: [0, 0, 1], far: 10000 }}>
			<Suspense fallback={null}>

				{
					// === Sky & Stars ===
					// -- Sky ----> https://docs.pmnd.rs/drei/shaders/sky
					// -- Stars --> https://docs.pmnd.rs/drei/shaders/stars
				}

				<Sky
					distance={450000}
					sunPosition={[0, 0, 0]}
					inclination={0}
					azimuth={0.25}
				/>

				<Stars
					radius={100} // Radius of the inner sphere (default=100)
					depth={50} // Depth of area where stars should fit (default=50)
					count={5000} // Amount of stars (default=5000)
					factor={4} // Size factor (default=4)
					saturation={0} // Saturation 0-1 (default=0)
					fade // Faded dots (default=false)
				/>

				<ambientLight intensity={0.75} />

				{/* Add Objects Here */}
				<Box />
				{/* <Sphere />
				<Cylinder /> */}
				{/* <Plane /> */}

			</Suspense>

			{
				// === Camera Controls ===
				// -- MapControls ----> https://docs.pmnd.rs/drei/controls/map-controls
				// -- OrbitControls --> https://docs.pmnd.rs/drei/controls/orbit-controls
			}

			<MapControls />
			{/* <OrbitControls /> */}

		</Canvas>
	);
}

export default App;
