import { useGetProductsQuery } from "../../services/api";

const Projects = () => {
  const { data: products, isSuccess, isLoading } = useGetProductsQuery();

  console.log(products?.data);
  return <>text</>;
};

export default Projects;
