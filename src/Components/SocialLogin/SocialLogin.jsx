import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
            })
            navigate('/');
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning">
                    <FaGoogle></FaGoogle>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;