import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../store/cart-slice"


export default function PoductTile({product}){

  const dispatch = useDispatch();
  const {cart} = useSelector(state => state)

  function handleAddToCart(){
    dispatch(addToCart(product))
  }
  function handleRemoveFromCart(){
    dispatch(removeFromCart(product.id))
  }
  

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-blue-950 gap-3 p-4 h-[400px] mt-10 ml-5 rounded-xl ">
        <div className="h-[180px]">
          <img 
            src={product.image} 
            alt={product.title} 
            className="object-cover h-full w-full"
            />
        </div>
        <div>
          <h1 className="w-56 truncate mt-3 text-gray-700 font-bold text-md">{product.title} </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart} className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4">
            {
              cart.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
            }
            </button>
        </div>
      </div>
    </div>
  )
}