import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert').slice(0, 6);
    const soup = menu.filter(item => item.category === 'soup').slice(0, 6);
    const salad = menu.filter(item => item.category === 'salad').slice(0, 6);
    const pizza = menu.filter(item => item.category === 'pizza').slice(0, 6);
    const offered = menu.filter(item => item.category === 'offered').slice(0, 6);
    return (
        <div>
            <Helmet>
                <title>Munch Magnet | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts */}
            <Cover img={dessertImg} title={"Desserts"}></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Desserts"></SectionTitle>
            <MenuCategory items={desserts}></MenuCategory>
            {/* pizza */}
            <Cover img={pizzaImg} title={"pizza"}></Cover>
            <SectionTitle subHeading="Don't Miss" heading="pizza"></SectionTitle>
            <MenuCategory items={pizza}></MenuCategory>
            {/* Soup */}
            <Cover img={soupImg} title={"Soup"}></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Soup"></SectionTitle>
            <MenuCategory items={soup}></MenuCategory>
            {/* Salad */}
            <Cover img={saladImg} title={"Salad"}></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Salad"></SectionTitle>
            <MenuCategory items={salad}></MenuCategory>
            
        </div>
    );
};

export default Menu;