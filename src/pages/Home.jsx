import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useGetProducts } from '../hooks/useProducts';

const Home = () => {
  const { productsData } = useGetProducts();


  return (
    <ItemListContainer productsData={productsData} />
  );
};

export default Home