import { useEffect, useState } from "react";
import { getCategories } from "../service";



export const useGetCategories = () => {
    const [categories, setCategories] = useState([]);


  useEffect(() => {
    getCategories()
    .then((response) => {
      setCategories(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


  return { categories }
}