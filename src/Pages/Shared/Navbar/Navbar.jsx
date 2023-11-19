import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    const navOptions = <>
        <li className="text-orange-500 underline"><Link to='/'>Home</Link></li>
        <li className="text-orange-500 underline"><Link to='/menu'>Menu</Link></li>
        <li className="text-orange-500 underline"><Link to='/order/salad'>Order Food</Link></li>
        {
            user ? <></> : <li className="text-orange-500 underline"><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-80 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogOut} className="btn btn-accent btn-outline">Log Out</button>
                        : <Link to='/login'><button className="btn btn-accent btn-outline">Log In</button></Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;