import "./App.css";
import { Canvas } from "@react-three/fiber";
import Sphere3d from "./Component/Sphere3d";
import Cylinder3d from "./Component/Cylinder3d";
import {OrbitControls} from "@react-three/drei";
 
function App() {
  return (
        <div style={{ width: "900px", height: "500px"}}>
          <Canvas >
            <pointLight position={[10, 10, 10]} />
            <ambientLight intensity={0.2} />
            <OrbitControls minDistance={6} maxDistance={6} minPolarAngle={1.45} maxPolarAngle={1.65} minAzimuthAngle={-0.1} maxAzimuthAngle={0.1} />
            
            <Sphere3d position={[-5, -4.5, -3]}/>
            <Sphere3d position={[-8.5, -2, -3]}/>
            <Sphere3d position={[-4, 2.5, -3]}/>
            <Sphere3d position={[-3, -1, -3]} />

            <Sphere3d position={[3, 0.5, -3]}/>
            <Sphere3d position={[3, 4.5, -3]}/>
            <Sphere3d position={[8, -4.5, -3]}/>
            <Sphere3d position={[8, 1, -3]}/>

            <Cylinder3d position={[-3.5, 0.75, -3]} rotation={[0,0,0.3]} size={1.8}/>
            <Cylinder3d position={[-5.75, -1.5, -3]} rotation={[0,0,1.7]} size={3.7}/>
            <Cylinder3d position={[-4, -2.75, -3]} rotation={[0,0,-0.5]} size={2.1}/>
            
            <Cylinder3d position={[0, -0.25, -3]} rotation={[0,0,-1.3]} size={4.2}/>

            <Cylinder3d position={[3, 2.5, -3]} rotation={[0,0,0]} size={2.1}/>
            <Cylinder3d position={[5.5, -2, -3]} rotation={[0,0,0.7]} size={5.3}/>
            <Cylinder3d position={[5.5, 0.75, -3]} rotation={[0,0,-1.45]} size={3.1}/>

          </Canvas>
        </div>
  );
}
 
export default App;