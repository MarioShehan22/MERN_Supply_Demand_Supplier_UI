import UserDetailsForm from "../components/UserDetailsForm";
import NavigationBar from "../components/NavigationBar";
import React from "react";
import {Trash2} from "lucide-react";
import ChangeQtyButtons from "../components/ChangeQtyButtons";
import {useStore} from "../store/store";
import {useShallow} from "zustand/react/shallow";
import ProductForm from "../components/ProductForm";

import {useGetAllProduct} from "../api/ProductService";
import {useGetSelectedUsers} from "../api/UserService";
import {useGetSelectedAddress} from "../api/AddressService";
import AxiosInstance from "../config/AxiosInstance";
import FooterSection from "../components/FooterSection";


const PlaceSupplyPage = () => {
    const { reset, products, removeProduct, total,addProduct } = useStore(
        useShallow((state) => ({
            reset: state.reset,
            products: state.products,
            removeProduct: state.removeProduct,
            total: state.total,
            addProduct: state.addProduct,
        }))
    );

    const{name}=useStore();
    const{user}=useGetSelectedUsers(name);
    const{address}=useGetSelectedAddress(user._id);
    const{items}=useGetAllProduct();

  return(
      <>
          <NavigationBar/>
          <div className="mx-auto mt-2 xl:max-w-screen-xl md:max-w-screen-md">
              <UserDetailsForm
                  data={user}
                  addressData={address}
              />
              <ProductForm
                  products={items}
              />
              <div className="mt-2">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead
                              className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  Id
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Product Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Price
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Qty
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Total Price
                              </th>
                              <th scope="col" className="px-6 py-3 flex justify-center items-center">
                                  Action
                              </th>
                          </tr>
                          </thead>
                          <tbody className="border">
                                  {products.map((product) => (
                                       product.activeState &&
                                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b" key={product._id}>
                                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                              {product._id}
                                          </th>
                                          <td className="px-6 py-4">
                                              {product.ProductName}
                                          </td>
                                          <td className="px-6 py-4">
                                              {product.purchasePrice}
                                          </td>
                                          <td className="px-6 py-4">
                                              <ChangeQtyButtons productId={product._id} />
                                          </td>
                                          <td className="px-6 py-4">
                                              {product.supply*product.purchasePrice}
                                          </td>
                                          <td
                                              onClick={() => removeProduct(product._id)}
                                          >
                                              <div className="flex justify-center items-center">
                                                  <Trash2 className="cursor-pointer hover:bg-gray-600"/>
                                              </div>
                                          </td>
                                      </tr>
                                  ))}
                          </tbody>
                      </table>
                  </div>
                  <p className="my-3 text-2xl font-bold">Total: {total}$</p>
                  <button
                      onClick={
                          ()=>{AxiosInstance.post(
                              '/suppliers/create',{
                                  product:products,
                                  supplierDetail:user._id,
                                  totalPrice:total,
                                  activeState: true
                              }).then(reset);}
                          // ()=>console.log(products)
                      }
                      className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
                  >
                      Place Supply Product
                  </button>
              </div>
          </div>
          <FooterSection/>
      </>
  );
}
export default PlaceSupplyPage;
