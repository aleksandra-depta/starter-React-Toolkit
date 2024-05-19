import { Outlet } from "react-router-dom";
import { useGetProductsQuery } from "../../services/api";
import { Nav } from "./navigation.styles";

const Navigation = () => {
  const { data: products, isSuccess, isLoading } = useGetProductsQuery();

  console.log(products?.data);
  return (
    <>
      <Nav>nav</Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
