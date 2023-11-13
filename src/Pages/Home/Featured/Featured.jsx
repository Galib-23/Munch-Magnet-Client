import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item pt-6 my-20 bg-fixed text-white">
            <SectionTitle subHeading={"Check it out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-8 px-36 bg-slate-500 bg-opacity-40">
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can i get some</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis odit est ullam similique eveniet consequatur a ratione laboriosam totam animi.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;