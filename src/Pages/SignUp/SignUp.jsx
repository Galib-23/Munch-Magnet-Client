import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        //formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log("Logged User: ", loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        title: "Sign Up Successfull",
                                        showClass: {
                                            popup: `
                                    animate__animated
                                    animate__fadeInUp
                                    animate__faster
                                  `
                                        },
                                        hideClass: {
                                            popup: `
                                    animate__animated
                                    animate__fadeOutDown
                                    animate__faster
                                  `
                                        }
                                    });
                                    navigate('/');
                                }
                            })

                        console.log("user profile updated");
                        reset();
                    }).catch(e => console.log(e));
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <Helmet>
                <title>Munch Magnet | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register("name")} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Your photo" {...register("photoURL")} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password")} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="flex justify-center mb-4">
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className='text-center mb-2'><small>Have an account? <Link className='font-bold text-blue-600' to='/login'>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;