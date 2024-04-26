import { useState } from "react";
import Layout from "../layout/Layout";
import { NewItem } from "../apiRequest/api"
import { redirect } from "react-router-dom";

const CreateItem = () => {
  const [input, setInput] = useState({});

  const FormInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value 
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    NewItem(input).then(res => {
      if(res?.status === 200) return redirect("/allItem");
    });
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

export default CreateItem;
