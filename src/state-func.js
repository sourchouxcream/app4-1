import React, {useState} from 'react'

export default function Cart(){
    let [numItem, setNumItem] = useState(0)
    let stock = 10

    const onClickAddCart = () => {
        if (numItem < stock){
        let newItem = numItem + 1
        setNumItem(newItem)
        }
    }
    const onClickDeleteCart = () => {
        if (numItem > 0){
            setNumItem(numItem - 1)
        }
    }

    return (
        <div>
            <div>จำนวนสินค้าในตะกร้า : {numItem}</div>
            <button onClick={onClickAddCart}>เพิ่มสินค้าลงตะกร้า</button>
            <button onClick={onClickDeleteCart}>ลบสินค้าในตะกร้า</button>
        </div>
    )
}