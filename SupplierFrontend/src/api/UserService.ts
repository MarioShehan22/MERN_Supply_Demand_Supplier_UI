import AxiosInstance from "../config/AxiosInstance";
import {useQuery} from "react-query";
import {UserFindByEmail} from "../utils/Utils";

export const useGetSelectedUsers = (name) => {
    const getSelectedUsers = async () => {
        try {
            const response = await AxiosInstance.get<UserFindByEmail>(`/users/find-by/${name}`);
            return response.data; // Return the product data (potentially empty)
        } catch (error) {
            console.error("Error fetching Users:", error);
            return [];
        }
    };

    const { data:user, error } = useQuery<UserFindByEmail>({
        queryKey: ["fetchSelectedUsers"],
        queryFn: getSelectedUsers,
        initialData: []
    });
    return { user, error };
};
