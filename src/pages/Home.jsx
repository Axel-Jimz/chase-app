import HomeBanner from "../components/HomeBanner";
import HomeCarousel from "../components/HomeCarousel";
import HomeDetails from "../components/HomeDetails";
import HomeFollowUs from "../components/HomeFollowUs";
import HomeHeader from "../components/HomeHeader";
import HomePlans from "../components/HomePlans";
import HomeFooter from "../components/HomeFooter"
import HomeFooterSecundary from "../components/HomeFooterSecundary";

const Home = () => {
  return (
    <div>
        <HomeHeader />
        <HomeBanner />
        <HomeCarousel />
        <HomePlans />
        <HomeDetails />
        <HomeFollowUs />
        <HomeFooter />
        <HomeFooterSecundary />
       
    </div>
  );
};
export default Home;
