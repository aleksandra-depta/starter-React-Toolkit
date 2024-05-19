import { useGetProductsQuery } from "../../services/api";
import { Bg } from "./products.styles";

const Products = () => {
  const { data: products, isSuccess, isLoading } = useGetProductsQuery();

  console.log(products?.data);

  return <Bg>Products</Bg>;
};

export default Products;
