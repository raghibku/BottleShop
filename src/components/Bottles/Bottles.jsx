import { useEffect } from "react";
import { useState } from "react"
import Bottle from "./Bottle";
import { addToLS, getStoredCart ,getTotalAmount,addAmountToLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);
    useEffect(()=>{
        fetch("bottles.json")
        .then(res => res.json())
        .then(data=>setBottles(data))
    } ,[])

    useEffect(()=>{
        console.log(`called the useEffect ${bottles.length}`)
        if(bottles.length>0){
            const storedCart = getStoredCart();
            const savedCart = []
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id===id)
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart);
            const storedAmount = getTotalAmount();
            setTotalAmount(storedAmount);
        }
        
    },[bottles])

    const handleAddToCart = (bottle) => {
        const isExist = cart.find(item=>item.id==bottle.id)
        if(isExist){
            alert("item already exists")
        }else{
            const newCart = [...cart,bottle];
            setCart(newCart);
            addToLS(bottle.id);
            const newAmount = totalAmount + bottle.price;
            setTotalAmount(newAmount);
            addAmountToLS(newAmount);
        }
    }

  return (
    <div>
        <Cart cart={cart} setCart={setCart} totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>
        <div className="grid grid-cols-3 gap-3 bg-slate-800 px-4 py-8 mx-10">
            {
                bottles.map((bottle)=>
                    <Bottle  
                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}
                    />
                )
            }
        </div>
    </div>
  )
}

export default Bottles