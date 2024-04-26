import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Card from "../components/ItemCard";
import { AllItem } from "../apiRequest/api";
import toast from "react-hot-toast";

const AllFood = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AllItem().then((res) => {
      if (res?.status == "success") {
        setData(res?.data);
      } else {
        toast.error("Something went wrong.");
      }
    });
  }, []);

  return (
    <Layout>
      <div className="flex flex-cols-3 items-center">
        {data?.length > 0
          ? data?.map((item, index) => {
              return <Card key={index} data={item} />;
            })
          : ""}
      </div>
    </Layout>
  );
};

export default AllFood;
