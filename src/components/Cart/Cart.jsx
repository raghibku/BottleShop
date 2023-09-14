import React from 'react'
import { removeFromLS,addAmountToLS } from '../../utilities/localStorage'

const Cart = (props) => {
    const {cart,setCart,totalAmount,setTotalAmount} = props

    const handleRemoveCart = (id) => {
        removeFromLS(id);
        const remainingCart = cart.filter(bottle => bottle.id!==id);
        setCart(remainingCart);
        const removedBottle = cart.find(bottle => bottle.id==id);
        const priceToBeRemoved = removedBottle.price;
        const newAmount = totalAmount-priceToBeRemoved;
        setTotalAmount(newAmount);
        addAmountToLS(newAmount);
    }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <h1>Cart Items:{cart.length}</h1>
        <h1>totalAmount:{totalAmount}</h1>
        <div className='flex items-center justify-center gap-4'>
            {
                cart.map((item)=>{
                    return(
                        <div key={item.id}>
                            <img className="w-[60px] rounded-lg" src={item.img} />
                            <button onClick={()=>handleRemoveCart(item.id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cart