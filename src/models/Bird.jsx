import {useRef, useEffect} from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


const Bird = () => {
    const birdRef = useRef();
    const {scene, animations} = useGLTF(birdScene);
    const {actions} = useAnimations(animations, birdRef);

    useEffect(() => {
      actions['Take 001'].play();
    },[]);

    useFrame(({clock , camera})=> {
      //Update the Y position simulate the flight moving in the sin wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      //Check if the bird reach a certain end point relative to the camera
      if(birdRef.current.position.x > camera.position.x + 10) {

      //Change the diretion to backward and rotate the bird 180 degrees to y-axis
        birdRef.current.rotation.y = Math.PI;
      } else if(birdRef.current.position.x < camera.position.x - 10) {
      //Change the bird direction to fordward and reset the rotation
        birdRef.current.rotation.y = 0;
      }

      //Update X and Z position based on the diretion
      if(birdRef.current.rotation.y === 0) {
        //Moving fordward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        //Moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    })
  return (
    <mesh position={[-5,2,1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird