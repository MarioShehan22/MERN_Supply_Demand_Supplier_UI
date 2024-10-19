import {Product, Products} from "../utils/Utils";
import {useQuery} from "react-query";
import AxiosInstance from "../config/AxiosInstance";

export const useGetProduct = () => {
    const getAllOrderProduct = async () => {
        try {
            const response = await AxiosInstance.get<Product[]>("http://localhost:3000/api/v1/suppliers/find-By-date/2024-10-17");
            //console.log(response.data)
            return response.data; // Return the product data (potentially empty)
        } catch (error) {
            // Handle potential errors during API call
            console.error("Error fetching products:", error);
            return []; // Return an empty array on error
        }
    };

    const { data, error } = useQuery<Product[]>({
        queryKey: ["fetchAllOrderProduct"],
        queryFn: getAllOrderProduct,
        initialData: []
    });
    return { data, error };
};

export const useGetAllProduct = () => {
    const getAllProduct = async () => {
        try {
            const response = await AxiosInstance.get<Products>("http://localhost:3000/api/v1/products/find-all");
            return response.data; // Return the product data (potentially empty)
        } catch (error) {
            // Handle potential errors during API call
            console.error("Error fetching products:", error);
            return []; // Return an empty array on error
        }
    };

    const { data:items, error } = useQuery<Products[]>({
        queryKey: ["fetchAllProduct"],
        queryFn: getAllProduct,
        initialData: []
    });

    return { items, error };
};
