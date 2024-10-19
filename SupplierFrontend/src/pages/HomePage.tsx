import NavigationBar from "../components/NavigationBar";
import CarouselSlider from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";
import React, {useEffect} from "react";
import {useGetAllProduct, useGetProduct} from "../api/ProductService";


const HomePage = () => {
    const {data} =  useGetProduct();
    const {items} =  useGetAllProduct();
    // const mergeProducts = items.concat(data).reduce((acc, obj) => {
    //
    //     const existingObj = acc.find(item => item.ProductName === obj.name);
    //     if (existingObj) {
    //         return acc.map(item => item.name === obj.ProductName ? {...item, ...obj } : item);
    //     } else {
    //         return [...acc, obj];
    //     }
    // }, []);

  return(
    <>
        <NavigationBar/>
        <div className="mx-auto xl:max-w-screen-xl md:max-w-screen-md">
            <HeroSection/>
            <div className="mt-12 p-3 mx-auto w-90 bg-[#195973] flex items-center justify-center text-xl font-bold gap-5">
                <table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
                    <thead
                        className="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Quantity
                        </th>
                        {/*<th scope="col" className="px-6 py-3">*/}
                        {/*    Price*/}
                        {/*</th>*/}
                    </tr>
                    </thead>
                    <tbody className="border">
                    {data.map((product,index) => (
                        <tr className="border-b dark:border-gray-700" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white ">
                                {product._id}
                            </th>
                            <td className="px-6 py-4">
                                {product.date.split('T')[0]}
                            </td>
                            <td className="px-6 py-4">
                                {product.name}
                            </td>
                            <td className="px-6 py-4">
                                {product.supplys}
                            </td>
                            {/*<td className="px-6 py-4">*/}
                            {/*    {product.date.split('T')[0]}*/}
                            {/*</td>*/}
                            {/*<td className="px-6 py-4">*/}
                            {/*    {product.ProductName}*/}
                            {/*</td>*/}
                            {/*<td className="px-6 py-4">*/}
                            {/*    {product.supply}*/}
                            {/*</td>*/}
                            {/*<td className="px-6 py-4">*/}
                            {/*    {product.purchasePrice}*/}
                            {/*</td>*/}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 mx-auto text-center font-bold text-6xl mt-12">Read What Other<br/> have to Say</div>
            <CarouselSlider/>
        </div>
        <FooterSection/>
    </>
  );
}

export default HomePage;
