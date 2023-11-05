
// import { useQuery } from "@tanstack/react-query";
import Title from "../../components/Title";
import { data } from "autoprefixer";
import Loading from "../Loading";
import UseRecipies from "../../hooks/UseRecipies";
import RecipieDash from "../../components/RecipieDash";



const ManageProduct = () => {
    // const {result ,isLoading, isFetching}= useQuery({
    //     queryKey: ['recipies'],
    //     queryFn: async() =>{
    //         const data =await fetch("http://localhost:5000/recipies");
    //         const recipies = await data.json();
    //         return recipies;
    //     }

    // });

    const { result, isLoading, isFetching,refetch } = UseRecipies();

    console.log(result)
    console.log(data, isLoading, isFetching,refetch)

    if (isLoading == true) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Title>Total {data.length} Recipies Found</Title>
            <div className="grid grid-cols-1 gap-5">
                {
                    data?.map((recipie) => (
                        <RecipieDash refetch={refetch} key={recipie._id} recipie={recipie}></RecipieDash>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageProduct;