import AxiosInstance from "../config/AxiosInstance";
import {Address} from "../utils/Utils";
import {useQuery} from "react-query";

export const useGetSelectedAddress = (id) => {
    const getSelectedAddress =  async () => {
        try {
            const response = await AxiosInstance.get<Address>(`/address/find-by/${id}`);
            return response.data; // Return the product data (potentially empty)
        } catch (error) {
            console.error("Error fetching Address:", error);
            return []; // Return an empty array on error
        }
    };

    const { data:address, error } = useQuery<Address>({
        queryKey: ["fetchSelectedAddress"],
        queryFn: getSelectedAddress,
        initialData: []
    });

    return { address, error };
};
