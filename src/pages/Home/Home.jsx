import Banner from "../../Components/Banner/Banner";
import ConnectUs from "../../Components/ConnectUs/ConnectUs";
import ExpertDoctors from "../../Components/ExpertDoctors/ExpertDoctors";
import OurServices from "../../Components/OurServices/OurServices";
import PaytientReview from "../../Components/PaytientReviews/PaytientReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <ConnectUs></ConnectUs>
            <PaytientReview></PaytientReview>
            <ExpertDoctors></ExpertDoctors>
        </div>
    );
};

export default Home;