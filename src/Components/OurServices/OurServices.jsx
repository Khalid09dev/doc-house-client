import { useState } from "react";

const OurServices = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div id="our-services" className="md:flex justify-center gap-6 md:py-32 py-6 bg-[#FFF]">
            <img className="px-3" src="https://i.postimg.cc/J7BWrpxx/our-services-1.png" alt="#" />
            <div>
                <h2 id="our-services-heading" className="text-[#0A0808] text-[40px] font-bold md:text-left text-center">Our Services</h2>
                <p className="text-[#3B3A3A] text-base md:block hidden md:text-left font-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, <br /> eaque ipsa quae ab illo inve ntore veritatis et quasi <br /> architecto beatae vitae dicta sunt explicabo.</p>
                <p className="text-[#3B3A3A] text-base text-center md:hidden font-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam,  eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <div className="container md:block hidden mx-auto py-4">
                <div role="tablist" className="tabs flex items-center ">
                    <button
                        role="tab"
                        className={`tab ${activeTab === 1 ? 'tab-active' : ''} rounded-md bg-[#F7A582] py-[30px] px-4 text-[#3B3A3A] text-[18px] font-semibold`}
                        onClick={() => setActiveTab(1)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}} 
                    >
                        Cavity Protection
                    </button>
                    <button
                        role="tab"
                        className={`tab ${activeTab === 2 ? 'tab-active' : ''} border-l-0 border-r-0 border-[2px] py-7 px-4 text-[#3B3A3A] text-[18px] font-semibold`}
                        onClick={() => setActiveTab(2)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}}
                    >
                        Cosmetic Dentistry
                    </button>
                    <button
                        role="tab"
                        className={`tab ${activeTab === 3 ? 'tab-active' : ''} border-l-0 border-[2px] py-7 px-4 text-[#3B3A3A] text-[18px] font-semibold`}
                        onClick={() => setActiveTab(3)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}}
                    >
                        Oral Surgery
                    </button>
                </div>

                <div className="tab-contents mt-4">
                    {activeTab === 1 && <div id="tab-content-1">
                        <img src="https://i.postimg.cc/vZYjVhrp/our-services-2.png" alt="#" />
                        <h3 className="text-[#0A0808] text-[28px] font-bold pt-3 ">Electro  Gastrology Therapy</h3>
                        <p className="text-base font-normal text-[#3B3A3A] pb-3 pt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br /> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore <br /> veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis <br /> unde omnis iste natus error </p>
                        <p className="text-base font-normal pb-3 text-[#3B3A3A]">Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, <br /> eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae <br /> dicta sunt explicabo.</p>
                        <button className="text-[#F7A582] text-xl font-bold border-[2px] py-3 px-6 border-[#F7A582] rounded-lg">More Details</button>
                    </div>}
                    {activeTab === 2 && <div id="tab-content-2">Content for Tab 2</div>}
                    {activeTab === 3 && <div id="tab-content-3">Content for Tab 3</div>}
                </div>
            </div>

            {/* for mobile devices */}
            <div className="container md:hidden mx-auto py-4">
                <div role="tablist" className="tabs flex justify-center items-center ">
                    <button
                        role="tab"
                        className={`tab ${activeTab === 1 ? 'tab-active' : ''} rounded-md bg-[#F7A582] py-[30px] px-7 text-[#3B3A3A] text-[18px] font-semibold`}
                        onClick={() => setActiveTab(1)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}} 
                    >
                        Gastrology
                    </button>
                    <button
                        role="tab"
                        className={`tab ${activeTab === 2 ? 'tab-active' : ''} border-l-0  border-[2px] py-7 px-7 text-[#3B3A3A] text-[18px] font-semibold`}
                        onClick={() => setActiveTab(2)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}}
                    >
                        Orthopedic
                    </button>
                </div>

                <div className="tab-contents mt-4">
                    {activeTab === 1 && <div id="tab-content-1">
                        <img className="mx-auto" src="https://i.postimg.cc/fyn4nhxM/gastrology.png" alt="#" />
                        <h3 className="text-[#0A0808] text-[28px] text-center font-bold pt-3 ">Electro  Gastrology Therapy</h3>
                        <p className="text-base font-normal text-[#3B3A3A] text-center px-4 pb-3 pt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                        <p className="text-base font-normal text-center pb-3 px-4 text-[#3B3A3A]">Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae  dicta sunt explicabo.</p>
                        <div className="flex justify-center"><button className="text-[#F7A582] text-xl font-bold border-[2px] py-3 px-6 border-[#F7A582] rounded-lg">More Details</button></div>
                    </div>}
                    {activeTab === 2 && <div id="tab-content-2">Content for Tab 2</div>}
                </div>
            </div>
            {/* for mobile devices */}
            </div>
        </div>
    );
};

export default OurServices;