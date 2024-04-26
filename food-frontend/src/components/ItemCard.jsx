import React from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { DeleteItem } from "../apiRequest/api";

const ItemCard = (props) => {
  const { data } = props;

  const itemId = data?._id;

  const handleDelete = (itemId) => {
    DeleteItem(itemId).then((response) => {
      if (response?.status == "success") {
        toast.success("Item deleted successfully.");
        Navigate("/allItem");
      } else toast.error("Something went wrong.");
    });
  };

  return (
    <div className="card w-1/4 bg-base-100 shadow-xl mx-4">
      <figure className="relative">
        <span className="absolute bg-[#A855F7] text-white text-[9px] rounded-md top-3 right-3 p-1">TK. {data?.Price}</span>
        <img className="w-[400px] h-[250px]" alt="Item" src={data?.Image} />
      </figure>
      <div className="card-body">
        <h3 className="card-title mb-2">{data?.Name}</h3>
        <div className="flex card-actions justify-start">
          <Link
            type="button"
            className="btn btn-sm btn-outline btn-success"
            to={`/updateItem/${itemId}`}
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-sm btn-outline btn-error"
            onClick={() => handleDelete(data?._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
