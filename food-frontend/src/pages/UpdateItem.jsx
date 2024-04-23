import { useState } from "react";
import Layout from "../layout/Layout";

const UpdateItem = () => {
  const [input, setInput] = useState({});

  const FormInput = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input : ", input);
  };

  return (
    <Layout>
      <div>
        <h1>Create Food Item</h1>
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
                    onChange={(e) => FormInput(e)}
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
                    onChange={(e) => FormInput(e)}
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
                    onChange={(e) => FormInput(e)}
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
                    onChange={(e) => FormInput(e)}
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
                    onChange={(e) => FormInput(e)}
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
                    onChange={(e) => FormInput(e)}
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
