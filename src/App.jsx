import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/ground.component';
import Player from './components/player.component';

function App() {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 10]} />
      <ambientLight intensity={0.5} />
      <Physics>
        <Player />
        <Ground />
      </Physics>
    </Canvas>
  );
}

export default App;
