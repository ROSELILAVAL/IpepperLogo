import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
 
function Sphere3d(props) {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  
  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[1, 200]} />
      <meshStandardMaterial
        clearcoat={true}
        roughness={0}
        color={hovered ?  "#36667a" : "#c6a47e" }
      />
    </mesh>
  );
}
 
export default Sphere3d;