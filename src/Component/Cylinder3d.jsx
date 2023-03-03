import React, { useRef } from "react";
 
function Cylinder3d(props) {
  const ref = useRef();
  
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <cylinderGeometry args={[0.2,0.2,props.size,100]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={"#36667a" }
        roughness={0}
      />
    </mesh>
  );
}
 
export default Cylinder3d;