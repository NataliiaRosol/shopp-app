import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartTile from "../components/cart/CartTile";


export default function Cart(){

  const [totalCart, setTotalCart] = useState(0)
  const {cart} = useSelector(state => state)
  
  
  useEffect(()=>{
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart]);

  console.log(totalCart);

  return(
    <div className="flexs">
      {
        cart && cart.length ? 
        <>
          <div className="min-h-[60vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {
                cart.map(item => <CartTile cartItem={item}/>)
              }
            </div>
          </div>
          <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-5">
            <h1 className="font-bold text-lg text-blue-900">Your cart summary</h1>
            <p>
              <span className="text-gray-800 font-bold">Total items: </span>
              <span>{cart.length}</span>
              <p>
                <span className="text-gray-800 font-bold">Total amount: </span>
                <span>{Number(totalCart).toFixed(2)}</span>
              </p>
            </p>
          </div>
        </>
        : 
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-blue-950 font-bold text-xl mb-10">Your cart is empty</h1>
          <Link to={'/'}>
          <button className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4">Shop Now</button></Link>
        </div>
      }
    </div>
  )
}