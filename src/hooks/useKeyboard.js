import { useCallback, useEffect, useState } from "react"

const keyActionMap = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
}

export const UseKeyboard = () => {

    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveRight: false,
        moveLeft: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
    })

    const handleKeyDown = useCallback(event => {
        const action = keyActionMap[event.code];
        if(!action) return;

        setActions(previousMovement => {
            return ({
                ...previousMovement,
                [action] : true
            })
        })
    }, [])

    const handleKeyUp = useCallback(event => {
        const action = keyActionMap[event.code];
        if(!action) return;

        setActions(previousMovement => {
            return ({
                ...previousMovement,
                [action] : false
            })
        })
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown');
            document.removeEventListener('keyup');
        }
    }, [handleKeyDown, handleKeyUp])

    return actions;
}