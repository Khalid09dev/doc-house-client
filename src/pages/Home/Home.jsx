import Banner from "../../Components/Banner/Banner";
import ConnectUs from "../../Components/ConnectUs/ConnectUs";
import OurServices from "../../Components/OurServices/OurServices";
import PaytientReview from "../../Components/PaytientReviews/PaytientReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <ConnectUs></ConnectUs>
            <PaytientReview></PaytientReview>
        </div>
    );
};

export default Home;