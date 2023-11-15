import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';

const Order = () => {
    return (
        <div>
            <Cover img={orderImg} title={"Order Food"}></Cover>
            <div className="tabs tabs-lifted">
                <a className="tab">Tab 1</a>
                <a className="tab tab-active">Tab 2</a>
                <a className="tab">Tab 3</a>
            </div>
        </div>
    );
};

export default Order;