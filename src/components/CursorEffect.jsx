import React, { useEffect, useState } from 'react'

const CursorEffect = () => {
    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        
    });

    //const circle = document.getElementsByClassName("mouseCircle")[0];
    return (
        <div className="mouseCircle" style={{top: `${mousePos.y}px`, left: `${mousePos.x}px`}}></div>
    )
    
}

export default CursorEffect