import React from "react";
import MetaData from "./layout/MetaData";
import {useGetProductsQuery} from "../redux/api/productApi";
import ProductItem from "./product/ProductItem";

const Home = () => {

  const { data,isLoading } = useGetProductsQuery();

  console.log(data);
  
  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div className="row">
        {data?.products?.map((product) =>(
          <ProductItem product={product} />
        ))}
        
      </div>
    </>
  );
};

export default Home;