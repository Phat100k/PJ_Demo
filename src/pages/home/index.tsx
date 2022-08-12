import axios from 'axios'
import React, { useEffect, useState } from 'react'
import productService from "../../services/product.js"
export const Home = () => {
  const [products, setProducts] = useState()
    const [paginate, setPaginate] = useState()
 

        const fetchData = () => { 
      //     axios.get('http://cfd-reactjs.herokuapp.com/product')
      //   .then(response => {
      //     console.log(response.data);
      //   }, error => {
      //     console.log(error);
      // })
           productService.getProduct()
        .then(res=>{
            // console.log(`res`, res)
            setProducts(res.data)
            setPaginate(res.paginate)
            console.log("thanhcong")
        })
      }
         
        useEffect(()=>{
          fetchData()
        },[])
  return (
    <div>HOme</div>
  )
  }
export default Home
