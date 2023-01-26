import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 10]}/>
      </Canvas>
    </>
  );
}

export default App;
