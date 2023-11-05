import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const RecipieDash = ({ recipie, refetch }) => {
    console.log(recipie)
    // console.log(Object.keys(recipie).join(","));
    const goto = useNavigate();

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

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/recipie/:${_id}`)
        // **1** .then(res => console.log(res.data));
        .then((res) => {
            if(res?.data?.deletedCount>0){
               Swal.fire(`${strMeal}`, "has been deleted!", "success");
               refetch();
            }
        });
        console.log(_id); 
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={strMealThumb} className="max-h-[200px]" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strCategory}</p>
            </div>
            <div className="card-actions flex flex-col justify-center">
                <button onClick={handleDelete} className="btn btn-primary">Delete This Recipies</button>
                <button onClick={() => goto(`/dashboard/update-product/${_id}`)} className="btn btn-primary">Update This Recipies</button>
            </div>
        </div>
    );
};

export default RecipieDash;