import { useQuery } from "@tanstack/react-query";


const useCategory = () => {
    const {data ,isLoading, isFetching, refetch}= useQuery({
        queryKey: ['categories'],
        queryFn: async() =>{
            const data =await fetch("http://localhost:5000/categories");
            const recipies = await data.json();
            return recipies;
        }
    
    });
    
    return {data ,isLoading, isFetching, refetch};
};

export default useCategory;