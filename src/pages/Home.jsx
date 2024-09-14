import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner";
import ProductTile from './../components/product/PoductTile.jsx'


export default function Home(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json();

    if(products){
      setLoading(false);
      setProducts(data)
    }
  }

  useEffect(()=>{
    fetchListOfProducts()
  }, [])

  return(
    <div>
      {
        loading ? 
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles 
            height={'120'}
            width={'120'}
            color="rgb(2, 24, 119)"
            visible={true}
          />
        </div> : 
        <div className="min-h[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {
            products && products.length > 0 ? 
            products.map(item => <ProductTile product ={item}/>)
            : null
          }
        </div>
      }
    </div>
  )
}