

const Bottle = (props) => {
    const {bottle,handleAddToCart}= props;
    const {img,name,price} = bottle
  return (
    <div className="flex justify-center items-center border-2 py-2 border-white">
        <div className="flex flex-col justify-start items-start w-[200px] ">
            <img className="w-[200px] rounded-lg" src={img} alt="" />
            <h1 className="text-gray-600 text-xl">{name}</h1>
            <p className="text-gray-600 text-lg">Price : {price} $</p>
            <button onClick={()=>handleAddToCart(bottle)} className="bg-white px-4 py-2 rounded-md">Purchase</button>

        </div>
    </div>
  )
}

export default Bottle