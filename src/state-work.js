import React, {useState} from 'react'

export default function Cart(){
    let [size, setSize] = useState(16)
    let[color, setColor] = useState()

    const onClickSizeUp = () => {
        setSize(size+1)
    }
    const onClickSizeDown= () => {
        setSize(size-1)
    }
    const onClickColor = (ev) => {
        let c = ev.target.innerText
        setColor(c)
    }
    const divStyle = {
        fontSize: size,
        color: color
    }

    return (
        <div>
            <div style={divStyle}>Font Size : {size}</div>
            <button onClick={onClickSizeUp}>เพิ่มขนาด Font</button>
            <button onClick={onClickSizeDown}>ลดขนาด Font</button>
            <button onClick={onClickColor}>Red</button>
            <button onClick={onClickColor}>Green</button>
            <button onClick={onClickColor}>Blue</button>
        </div>
    )
}