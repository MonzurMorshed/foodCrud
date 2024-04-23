import React from "react";
import Layout from "../layout/Layout";
import Card from "../components/ItemCard";

const AllFood = () => {
  const data = [];
  return (
    <Layout>
      <div>
        <Card data={data} />
      </div>
    </Layout>
  );
};

export default AllFood;
