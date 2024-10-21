import React, {useEffect, useState} from "react";
import {Supply} from "../utils/Utils";
import {useStore} from "../store/store";
import AxiosInstance from "../config/AxiosInstance";
import NavigationBar from "../components/NavigationBar";
import FooterSection from "../components/FooterSection";

const SupplyDetailsPage = () => {
    const [data, setData] = useState<Supply[]>([]);
    const { name } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosInstance.get<Supply[]>(
                    `/suppliers/find-By-email/${name}`
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching supplies:", error);
                // Handle errors here (e.g., display an error message to the user)
            }
        };

        fetchData();
    }, []);
  return(
      <>
          <NavigationBar/>
          <div className="mx-auto mt-2 xl:max-w-screen-xl md:max-w-screen-md">
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
                                  Date
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Products
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Total Price
                              </th>
                          </tr>
                          </thead>
                          <tbody className="border">
                          {data.length > 0 ? (
                              data?.map((supply) => (
                                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 text-lg" key={supply._id}>
                                      <th scope="row" className="px-6 py-4 text-base text-gray-900 whitespace-nowrap dark:text-white ">
                                          {supply._id}
                                      </th>
                                      <td className="px-6 py-4">
                                          {supply.date.substring(0, 10)}
                                      </td>
                                      <td className="px-6 py-4">
                                          {supply.product.length > 0 ? (
                                              supply.product.map((product,i) => (
                                                  <ul key={i}>
                                                      <li>
                                                          {product.ProductName} : {product.supply}
                                                      </li>
                                                  </ul>
                                              ))):(
                                              <tr>
                                                  <td colSpan="4" className="text-center py-4">
                                                      Loading Product...
                                                  </td>
                                              </tr>
                                          )}
                                      </td>
                                      <td className="px-6 py-4">
                                          {supply.totalPrice}
                                      </td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="4" className="text-center py-4">
                                      Loading supply...
                                  </td>
                              </tr>
                          )}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <FooterSection/>
      </>
  );
}
export default SupplyDetailsPage;
