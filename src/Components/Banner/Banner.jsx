
const Banner = () => {
    return (
        <div id="banner" className="bg-[#07332F]">
            <div className="md:flex justify-center items-center gap-60">
            <div className="md:pb-40 pb-20 md:pt-0 pt-7">
                <h1 className="md:text-[55px] text-[30px] md:text-left text-center md:leading-[65px] text-[#F3F3F3] font-semibold">Your Best Medical <br /> Help Center</h1>
                <p className="text-[18px] font-semibold pt-4 pb-5 md:text-left text-center">Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</p>
                <div className="flex md:justify-start justify-center">
                <button className="text-white text-base font-medium bg-[#F7A582] py-3 px-6 rounded-lg">All Service</button>
                </div>
            </div>

            <div className="md:mr-20">
                <img className="md:absolute top-[435px] right-[510px]" src="https://i.postimg.cc/GhC9ks5k/banner-img-4.png" alt="#" />
                <img className="md:relative top-44 right-36" src="https://i.postimg.cc/NfnBJk2Z/doc-1.png" alt="#" />
                <img className="md:sticky" src="https://i.postimg.cc/Px7SsJbf/doc-2.png" alt="#" />
                <img className="md:relative left-36 bottom-[450px]" src="https://i.postimg.cc/YS9PJ5c3/doc-3.png" alt="#" />
            </div>
            </div>
        </div>
    );
};

export default Banner;