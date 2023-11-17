import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-8">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 bg-slate-100 mb-20 w-2/">Order Now !</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;