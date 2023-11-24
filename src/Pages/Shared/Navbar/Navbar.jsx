import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const [cart] = useCart();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const cartIcon = <button className="btn px-0 right-0 bg-transparent border-none hover:bg-orange-200 hover:bg-opacity-20">
        <FaShoppingCart className="text-white h-8 w-8" />
        <div className="badge badge-secondary left-0 -translate-x-4 -translate-y-3">+{cart.length}</div>
    </button>

    const navOptions = <>
        <li className="text-orange-500 underline"><Link className="hover:text-white" to='/'>Home</Link></li>
        <li className="text-orange-500 underline"><Link className="hover:text-white" to='/menu'>Menu</Link></li>
        <li className="text-orange-500 underline"><Link className="hover:text-white" to='/order/salad'>Order Food</Link></li>
        {
            user ? <></> : <li className="text-orange-500 underline"><Link className="hover:text-white" to='/login'>Login</Link></li>
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
                            {cartIcon}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Munch Magnet</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex items-center gap-1 lg:gap-3">
                            <Link to='/dashboard/cart'>
                                <div className="hidden lg:flex">
                                    {cartIcon}
                                </div>
                            </Link>
                            {
                                user.photoURL ?
                                    <img className="mt-1 w-10 h-10 rounded-full hover:border-2 border-orange-400" src={user.photoURL} alt="" />
                                    : <></>
                            }
                            <button onClick={handleLogOut} className="btn btn-accent btn-outline btn-sm">Log Out</button>
                        </div>
                            : <Link to='/login'><button className="btn btn-accent btn-outline btn-sm">Log In</button></Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;