import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({item}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                item.map(item => <FoodCard
                    key={item._id} item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;