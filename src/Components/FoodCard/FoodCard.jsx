
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {

    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();


    const handleAddToCart = (food) => {
        console.log(food);
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, 
                image,
                price
            }
            console.log(cartItem);
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}});
                }
              });
        }

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