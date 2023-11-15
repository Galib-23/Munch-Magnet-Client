import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-20">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;