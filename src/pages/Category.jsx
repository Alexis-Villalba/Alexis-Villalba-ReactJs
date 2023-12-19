import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useGetProductsByCategory } from '../hooks/useCategoryFilter';

const Category = () => {
    const {id} = useParams();

  const { productsData } = useGetProductsByCategory(id);


  return (
    <ItemListContainer productsData={productsData} />
  );
};

export default Category