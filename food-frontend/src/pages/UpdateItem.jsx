import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Navigate, redirect, unstable_HistoryRouter, useParams } from "react-router-dom";
import { EditItem, GetItem } from "../apiRequest/api";
import toast from "react-hot-toast";

const UpdateItem = () => {

  const [item,setItem] = useState({
    name: '',
    code: '',
    image: '',
    category: '',
    qty: '',
    price: ''
  });

  const params = useParams();

  useEffect(() => {
    GetItem(params?.id).then(res => {
      console.log(typeof res?.data[0]);
      
      setItem({
        name: res?.data[0]?.Name,
        code: res?.data[0]?.Code,
        image: res?.data[0]?.Image,
        category: res?.data[0]?.Category,
        qty: res?.data[0]?.Quantity,
        price: res?.data[0]?.Price
      })
    })
  },[params?.id])

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.assign(item,{
      _id: params?.id
    });

    EditItem(item).then(res => {
      toast.success('Item update successfully.');
      // Navigate('/allItem');
    });
  };

  return (
    <Layout>
      <div>
        <h1>Update Food Item</h1>
        <div>
          <form onSubmit={handleSubmit} className="">
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Food Name</span>
                  </div>
                  <input
                    name="name"
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    onChange={(e) => setItem({...item, name: e.target.value})}
                    value={item?.name}
                    required
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Food Code</span>
                  </div>
                  <input
                    name="code"
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    onChange={(e) => setItem({...item, Code: e.target.value})}
                    value={item?.code}
                    required
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Food Image</span>
                  </div>
                  <input
                    name="image"
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    onChange={(e) => setItem({...item, image: e.target.value})}
                    value={item?.image}
                    required
                  />
                </label>
              </div>
            </div>
            
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Food Category</span>
                  </div>
                  <input
                    name="category"
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    onChange={(e) => setItem({...item, category: e.target.value})}
                    value={item?.category}
                    required
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">QTY</span>
                  </div>
                  <input
                    name="qty"
                    className="input input-bordered w-full max-w-xs"
                    type="number"
                    onChange={(e) => setItem({...item, qty: e.target.value})}
                    value={item?.qty}
                    required
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    name="price"
                    className="input input-bordered w-full max-w-xs"
                    type="number"
                    onChange={(e) => setItem({...item, price: e.target.value})}
                    value={item?.price}
                    required
                  />
                </label>
              </div>
            </div>
            <div>

            <div className="grid grid-rows-1 my-4">
              <button className="btn btn-wide bg-[#5A67BA] text-white text-600">Submit</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateItem;
