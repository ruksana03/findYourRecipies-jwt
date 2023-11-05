import { useQuery } from "@tanstack/react-query";


const UseRecipies = () => {

    const {data ,isLoading, isFetching, refetch}= useQuery({
        queryKey: ['recipies'],
        queryFn: async() =>{
            const data =await fetch("http://localhost:5000/recipies");
            const recipies = await data.json();
            return recipies;
        }
    
    });
    
    return {data ,isLoading, isFetching, refetch};
};

export default UseRecipies;