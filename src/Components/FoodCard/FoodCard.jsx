import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const FoodCard = ({ item }) => {
    const {name, image, price, recipe} = item;
    const {user} = useContext(AuthContext);
    const handleAddToCart = food => {
        console.log(food);

    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-3 px-2 py-1 rounded-xl bg-opacity-80">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 mt-3 w-2/4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;