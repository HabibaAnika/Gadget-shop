import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Review from "../components/Home/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <FeaturedProducts></FeaturedProducts>
        <Review></Review>
        <Accordion></Accordion>
      </div>
    </div>
  );
};

export default Home;
