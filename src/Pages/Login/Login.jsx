import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);

    //To redirect to the page from where we came to login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Login Successfull",
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
                  navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
                alert(`${error}`)
            })
    }
    const handleValidateCapthca = (e) => {
        const user_capthca_value = e.target.value;
        console.log(user_capthca_value);
        if (validateCaptcha(user_capthca_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }
    return (
        <>
            <Helmet>
                <title>Munch Magnet | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCapthca}
                                    name="capthca"
                                    placeholder="Type the above text" className="input input-bordered" required />
                                {/* <button className='btn border-blue-500 text-blue-700 btn-outline btn-xs mt-2 w-1/2'>Validate Capthca</button> */}
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn text-white btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='flex justify-center mb-3'>
                        <SocialLogin></SocialLogin>
                        </div>
                        <p className='text-center mb-2'><small>New Here ? <Link className='font-bold text-blue-600' to='/signup'>Create Account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;