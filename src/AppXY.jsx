import React, {useRef, useState} from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({x: 0, y:0})
/*    const [x, setX] = useState();
    const [y, setY] = useState();*/

    return (
        <div className='container' onMouseMove={(e)=>{
            //setPosition({x:e.clientX, y:e.clientY});
            //수평으로만 이동 가능하다면?
            setPosition((prev) => ({ ...prev, x:e.clientX}));
        }}>
          <div className='pointer' style={{transform:`translate(${position.x}px, ${position.y}px)` }}/>
        </div>
    );
}
