import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Ground from './components/ground.component';

function App() {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 10]} />
      <Physics>
        <Ground />
      </Physics>
    </Canvas>
  );
}

export default App;
