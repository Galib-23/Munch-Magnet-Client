
const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div className="flex">
            <img style={{
                borderRadius: '0 200px 200px 200px'
            }} className="w-[120px] h-[100px]" src={image} alt="" />
            <div className="ml-4">
                <h3 className="uppercase text-lg">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400 text-xs">${price}</p>
        </div>
    );
};

export default MenuItem;