import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { UseKeyboard } from "../hooks/useKeyboard";

const JUMP_FORCE = 3;
const EPSILON = 0.05;

export const Player = () => {
    const actions = UseKeyboard();

    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 1, 0]
    }))


    const velocity = useRef([0, 0, 0]);
    useEffect(() => {
        api.velocity.subscribe(newVelocity => {
            velocity.current = newVelocity;
        }, [api.velocity])
    })

    const position = useRef([0, 0, 0]);
    useEffect(() => {
        api.position.subscribe(newPos => {
            position.current = newPos;
        })
    }, [api.position])

    useFrame(() => {
        camera.position.copy(new Vector3(position.current[0], position.current[1], position.current[2]));

        if(actions.jump && Math.abs(velocity.current[1]) < EPSILON) {
            api.velocity.set(velocity.current[0], JUMP_FORCE, velocity.current[2])
        }
    })

    return (
        <mesh ref={ref} />
    )
}

export default Player;