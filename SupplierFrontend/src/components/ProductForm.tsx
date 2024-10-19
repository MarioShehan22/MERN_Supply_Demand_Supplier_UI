import React, {useEffect, useState} from "react";
import AxiosInstance from "../config/AxiosInstance";
import {useStore} from "../store/store";
import {useShallow} from "zustand/react/shallow";

interface Products{
    _id:string|';'
    ProductName:string|'';
    QuantityInKilos:number|0;
    purchasePrice:number|0;
    activeState:boolean|true;
    supply:number|0;
}
const ProductForm = ({products}) => {
    const[getId,setGetId]= useState("");
    const[product,setProduct] = useState<Products>({
        _id:'',
        ProductName:'',
        QuantityInKilos:0,
        purchasePrice:0,
        activeState:true,
        supply:0
    });
    const getProductById = (e)=>{
        findProductsById(e.target.value);
        setGetId(e.target.value);
    }
    useEffect(()=>{
        findProductsById(getId);
    },[]);
    const findProductsById = async (id)=>{
        const response = await AxiosInstance.get(`/products/find/${id}`);
        setProduct(response.data);
    }
    const {addProduct } = useStore(
        useShallow((state) => ({
            addProduct: state.addProduct,
        }))
    );
  return(
      <>
          <hr className="my-4"/>
          <div className="my-2 grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
              <div className="min-h-[50px] rounded-lg text-black flex flex-col">
                  <label className="block mb-2 text-sm font-medium" htmlFor="productName">Product Name</label>
                  <select id="product" className="border border-gray rounded-lg flex-1" onChange={getProductById}>
                      <option>Select Product</option>
                      {products.map((product) => (
                          <option key={product._id} value={product._id}>{product.ProductName}</option>
                      ))}
                  </select>
              </div>
              <div className="min-h-[50px] rounded-lg">
                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="QuantityInKilos">QuantityInKilos</label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                      name="QuantityInKilos"
                      value={product.QuantityInKilos}
                      placeholder="QuantityInKilos"
                      disabled
                  />
              </div>
              <div className="min-h-[50px] rounded-lg">
                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="purchasePrice">purchasePrice</label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
                      name="purchasePrice"
                      value={product.purchasePrice}
                      placeholder="purchasePrice"
                      disabled
                  />
              </div>
              <div className="min-h-[50px] rounded-lg flex items-end justify-center">
                  <button onClick={() => {
                      addProduct({
                          ["supply"]: product.supply,
                          ["_id"]: product._id,
                          ["purchasePrice"]: product.purchasePrice,
                          ["ProductName"]:product.ProductName,
                      });}}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      Add to Cart
                  </button>
              </div>
              {/*<div className="min-h-[50px] rounded-lg">*/}
              {/*    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="qty">qty</label>*/}
              {/*    <input*/}
              {/*        type="number"*/}
              {/*        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"*/}
              {/*        name="qty"*/}
              {/*        defaultValue={product.supply}*/}
              {/*        onChange={*/}
              {/*            (e)=>{*/}
              {/*                setProduct({*/}
              {/*                    ProductName: '',*/}
              {/*                    QuantityInKilos: 0,*/}
              {/*                    _id: '',*/}
              {/*                    activeState: false,*/}
              {/*                    purchasePrice: 0,*/}
              {/*                    supply:e.target.value});*/}
              {/*                console.log(product);*/}

              {/*            }*/}
              {/*        }*/}
              {/*        placeholder="qty"*/}
              {/*    />*/}
              {/*</div>*/}

              <div className="min-h-[50px] rounded-lg flex items-center">
                  <input
                      type="checkbox"
                      name="activeState"
                      className="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300"
                      checked={product.activeState}
                      placeholder="activeState"
                  />
                  <label className="block ms-2 text-sm font-medium text-gray-300" htmlFor="ActiveState">Active State</label>
              </div>
          </div>
      </>
  );
}
export default ProductForm;
