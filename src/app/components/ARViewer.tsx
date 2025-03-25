// src/app/components/ARViewer.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

const ARViewer = ({ modelPath }) => (
  <Canvas className="h-[500px]">
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} />
    <OrbitControls />
    <Environment preset="studio" />
    <mesh>
      <primitive object={modelPath} />
    </mesh>
  </Canvas>
);
export default ARViewer;