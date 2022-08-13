import axios from 'axios'
import React, { useEffect, useState } from 'react'
import productService, { Pagination, Product } from "../../services/product"
import {getProducts} from "../../services/product"
export const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
    const [paginate, setPaginate] = useState<Pagination>()
 

        const fetchData = async() => { 
        //   axios.get('http://cfd-reactjs.herokuapp.com/product')
        // .then(response => {
        //   console.log(response.data);
        // }, error => {
        //   console.log(error);
      // })
        //    productService.getProduct()
        // .then(res=>{
        //     // console.log(`res`, res)
        //     setProducts(res.data)
        //     // setPaginate(res.paginate)
        //     console.log("thanhcong")
        // })
          const res = await getProducts();
          setProducts(res.data)
          setPaginate(res.pagination)
          
      }
         
        useEffect(()=>{
          fetchData()
        },[])
  return <div>
    {
    products?.map(e=><div>{e.id}</div>)
  }
  </div>;
  }
export default Home
