import React, { useState ,useEffect,useRef} from 'react'
import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../component/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../component/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  const [isRotating,setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale= null;
    let screenPosition = [0, -6.5, -43];
    let rotation =[0.1,4.7,0];
    if(window.innerWidth<768){
      screenScale = [0.9,0.9,0.9];
      
    }else{
      screenScale = [1,1,1];
      
    }
    return [screenScale, screenPosition, rotation]
  }
  const adjustPlaneForScreenSize = () => {
    let screenScale= null;
    let screenPosition = null;
    
    if(window.innerWidth<768){
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0,-1.5,0];
    }else{
      screenScale = [3,3,3];
      screenPosition = [0,-4,-4];
    }
    return [screenScale, screenPosition]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 flex items-center justify-center z-10'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near:0.1, far:1000, position:[0,0,5]}}>
        {/* Wrapper loading screen for 3d scene  */}
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1,1,1]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>    
        <Sky isRotating={isRotating}/>
        <Bird/>
        <Island 
        scale={islandScale}
        position={islandPosition}
        rotation={islandRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        />
        <Plane
        scale={planeScale}
        position={planePosition}
        rotation={[0,20,0]}
        isRotating={isRotating}
        />
        </Suspense>
      </Canvas>
      
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home