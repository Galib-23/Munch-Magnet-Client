import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {

    const axiosSecure = useAxiosSecure();

    //tanStack query
    const {data: cart=[]} = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data;
        }
    })

    return [cart];
};

export default useCart;