import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from 'react-icons/fa'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = '7e2966ecb43d7bc8c968722daca1fc5f';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        //image upload on imageBB and get url
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            //send the dtata to the server
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
        }
        console.log(res.data);
    }
    return (
        <div>
            <SectionTitle heading={'Add an item'} subHeading={'Whats New!'}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <label className="form-control w-full mt-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register('name')} type="text" placeholder="Recipe name" className="input input-bordered w-full" required/>
                    </label>

                    <div className="flex gap-6 mt-6">
                        {/* category */}
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default" {...register("category")} className="select select-bordered w-full" required>
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register('price')} type="number" placeholder="Price" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Put Recipe Details here" required></textarea>
                    </label>
                    <div className="mt-6">
                        <input {...register('image')} type="file" className="file-input w-full max-w-xs" required/>
                    </div>
                    <button className="btn mt-6 bg-orange-400">
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;