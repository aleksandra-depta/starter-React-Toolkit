import { useGetProductsQuery } from "../../services/api";
import { Bg } from "./home.styles";

const Home = () => {
  const { data: products, isSuccess, isLoading } = useGetProductsQuery();

  console.log(products?.data);

  return <Bg>Home</Bg>;
};

export default Home;
