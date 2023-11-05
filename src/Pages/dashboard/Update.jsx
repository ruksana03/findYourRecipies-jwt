import { useLoaderData, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Title from "../../components/Title";
import useCategory from "../../hooks/useCategory";
import axios from "axios";
import Swal from "sweetalert2";


const Update = () => {

    const { data:categories } = useCategory();
    console.log(data.categories)
    const navigation = useNavigate();
    const goto = useNavigate();
    console.log(navigation);

    const recipie = useLoaderData();
    console.log(data);

    const {
        _id,
        idMeal,
        strMeal,
        strDrinkAlternate,
        strCategory,
        strArea,
        strTheme,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
    } = recipie || {};

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updateRecipie = {

            strMeal: form.strMeal?.value || "not-Given",
            strDrinkAlternate: form.strDrinkAlternate?.value || "not-Given",
            strCategory: form.strCategory?.value || "not-Given",
            strArea: form.strArea?.value || "not-Given",
            strTheme: form.strTheme?.value || "not-Given",
            strInstructions: form.strInstructions?.value || "not-Given",
            strMealThumb: form.strMealThumb?.value || "not-Given",
            strTags: form.strTags?.value || "not-Given",
        };
        console.log(updateRecipie);
        const response = await axios.put(`http://localhost:5000/recipie/${_id}`,updateRecipie)
        
       const data = await response.data;
       console.log(data);

       if(data.modifiedCount>0){
        Swal.fire('data Updated',"clicked","success")
       }
       goto("/dashboard/manage-product");

    }

    if (navigation.loading == "loading") return <Loading></Loading>;



    return (
        <div>
            <Title>update Product</Title>

            <div onSubmit={handleUpdate} className="form">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>

                        <div className="flex gap-2 flex-wrap">
                            <input
                                type="text"
                                placeholder="Enter a Product Name"
                                className="input flex-1 input-bordered"
                                name="strMeal"
                                defaultValue={strMeal}
                                required
                            />

                            <input
                                type="url"
                                placeholder="Enter a Product image"
                                className="input flex-1 input-bordered"
                                name="strMealThumb"
                                defaultValue={strMealThumb}
                                required
                            />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Area</span>
                        </label>

                        <div className="flex gap-2 flex-wrap">
                            <input
                                type="text"
                                placeholder="Enter area"
                                className="input flex-1 input-bordered"
                                name="strArea"
                                defaultValue={strArea}
                                required
                            />


                            <select name="strCategory" className="input flex-1 input-bordered" id="">
                                {
                                    categories?.map(cat =>( <option defaultValue={cat.strCategory}>{cat.strCategory}</option>))
                                }
                            </select>

                            <input
                                type="text"
                                placeholder="Enter a Category"
                                
                                name="strCategory"
                                defaultValue={strCategory}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter color</span>
                        </label>

                        <div className="flex gap-2 flex-wrap">
                            <input
                                type="color"
                                placeholder="Enter a Product Name"
                                className="input flex-1 input-bordered"
                                name="strTheme"
                                defaultValue={strTheme}
                                required
                            />

                            <input
                                type="text"
                                placeholder="Enter some tags"
                                className="input flex-1 input-bordered"
                                name="strTags"
                                defaultValue={strTags}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instruction</span>
                            </label>
                            <textarea
                                className="textarea textarea-ghost" placeholder="Insert Some Information"
                                name="strInstructions"
                                defaultValue={strInstructions}
                            ></textarea>

                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add A Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;