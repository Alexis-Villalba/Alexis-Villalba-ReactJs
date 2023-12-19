import { useEffect, useState } from "react";
import { getProductById } from "../service";



export const useGetProductById = (id) => {
    const [productData, setProductData] = useState([]);
  
  
  useEffect(() => {
    getProductById(id)
    .then((response) => {
      setProductData(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [id]);
  
  return { productData }
  }