
import axios from "axios";
import Title from "../../components/Title";


const AddProduct = () => {

const handleSubmit = (e) =>{
    e.preventDefault();

    const form = e.target;

    const recipie = {
        idMeal:form.idMeal?.value || "not-Given",
        strMeal:form.strMeal?.value || "not-Given",
        strDrinkAlternate:form.strDrinkAlternate?.value || "not-Given",
        strCategory:form.strCategory?.value || "not-Given",
        strArea:form.strArea?.value || "not-Given",
        strTheme:form.strTheme?.value || "not-Given",
        strInstructions:form.strInstructions?.value || "not-Given",
        strMealThumb:form.strMealThumb?.value || "not-Given",
        strTags:form.strTags?.value || "not-Given",
        strYoutube:form.strYoutube?.value || "not-Given"
    }

    // console.log(recipie);

    //:::: using fetch :::

    // fetch("http://localhost:5000/recipie", {
    //     method: "POST",
    //     headers:{
    //         "Content-Type" : "application/json",
    //     },
    //     body: JSON.stringify(recipie),
    // })
    // .then((res)=>res.json())
    // .then((data) => console.log(data));


    // using Axios 

    axios
    .post("http://localhost:5000/recipie", recipie)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
  
};

    return (
        <div>
            <Title>Add A Product</Title>

            <div className="form">
                <form onSubmit={handleSubmit} className="card-body">
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
                                required
                            />

                            <input
                                type="url"
                                placeholder="Enter a Product image"
                                className="input flex-1 input-bordered"
                                name="strMealThumb"
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
                                required
                            />

                            <input
                                type="text"
                                placeholder="Enter a Category"
                                className="input flex-1 input-bordered"
                                name="strCategory"
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
                                required
                            />

                            <input
                                type="text"
                                placeholder="Enter some tags"
                                className="input flex-1 input-bordered"
                                name="strTags"
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

export default AddProduct;