import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BsDot } from "react-icons/bs";


const DoctorProfile = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="bg-[#F3F3F3] pt-28">
            <div className="flex justify-center ml-[300px] mr-32 pr-44 py-8 rounded-lg bg-white gap-7">
                <img className="w-[350px] h-[378px] bg-[#F3F3F3] rounded-lg" src="" alt="#" />
                <div>
                    <h2 className="text-[40px] font-bold text-[#0A0808]">Dr. Ruby Perrin</h2>
                    <p className="text-[18px] font-normal text-[#6C6B6B]">MBBS, MD - General Medicine</p>
                    <div className="flex text-xl gap-1 text-[#F2871D]">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar className="text-[#CECECE]"></FaStar>
                    </div>
                    <div className="flex items-center py-2 text-base font-normal"><CiLocationOn className="text-xl"></CiLocationOn><p>Dhanmondi, Dhaka, Bangladesh - <span className="text-[#F7A582] font-semibold">Get Directions</span></p></div>
                    <div className="flex gap-3">
                        <img className="bg-[#F3F3F3] w-[60px] rounded-lg h-[60px]" src="" alt="" />
                        <img className="bg-[#F3F3F3] w-[60px] rounded-lg h-[60px]" src="" alt="" />
                        <img className="bg-[#F3F3F3] w-[60px] rounded-lg h-[60px]" src="" alt="" />
                        <img className="bg-[#F3F3F3] w-[60px] rounded-lg h-[60px]" src="" alt="" />
                        <img className="bg-[#F3F3F3] w-[60px] rounded-lg h-[60px]" src="" alt="" />
                    </div>
                    <div className="pt-5 gap-4 flex">
                        <button className="text-base py-2 border px-4 rounded-lg font-semibold">Dental Filling</button>
                        <button className="text-base py-2 border px-4 rounded-lg font-semibold">Teetch Whitening</button>
                    </div>
                </div>
            </div>

        <div className="container md:block hidden mx-auto p-8 rounded-lg bg-white mt-20 border">
            <div role="tablist" className="tabs flex items-center ">
                <button
                    role="tab"
                    className={`tab ${activeTab === 1 ? 'tab-active' : ''} rounded-md bg-[#F7A582] py-[30px] px-24 text-[#3B3A3A] text-[18px] font-semibold`}
                    onClick={() => setActiveTab(1)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}} 
                >
                    Overview
                </button>
                <button
                    role="tab"
                    className={`tab ${activeTab === 2 ? 'tab-active' : ''} border-t-0 border-l-0 border-r-0 border-[2px] py-7 px-24 text-[#3B3A3A] text-[18px] font-semibold`}
                    onClick={() => setActiveTab(2)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}}
                >
                    Locations
                </button>
                <button
                    role="tab"
                    className={`tab ${activeTab === 3 ? 'tab-active' : ''} border-t-0 border-r-0 border-l-0 border-[2px] py-7 px-24 text-[#3B3A3A] text-[18px] font-semibold`}
                    onClick={() => setActiveTab(3)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}}
                >
                    Reviews
                </button>
                <button
                    role="tab"
                    className={`tab ${activeTab === 4 ? 'tab-active' : ''} border-r-0 border-t-0 border-l-0 border-[2px] py-7 px-24 text-[#3B3A3A] text-[18px] font-semibold`}
                    onClick={() => setActiveTab(4)} style={{display: "inline-flex", justifyContent: "center", alignContent: "center"}}
                >
                    Business Hours
                </button>
            </div>
            <div className="tab-contents mt-4">
                {activeTab === 1 && <div id="tab-content-1">
                    <h4 className="text-[#3B3A3A] text-xl font-bold">About Me</h4>
                    <p className="text-[#3B3A3A] text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="flex gap-20">
                        <div>
                            <h4 className="text-[#3B3A3A] text-xl font-bold pb-4 pt-2">Education</h4>
                            <ul>
                                <li className="text-[#3B3A3A] text-base font-semibold">American Dental Medical University</li>
                                <li className="text-[#3B3A3A] text-base flex items-center font-normal"> <BsDot /><span>BDS</span></li>
                                <li className="text-[#3B3A3A] text-base flex items-center font-normal"> <BsDot /><span>1988 - 2003</span></li>
                                <li className="text-[#3B3A3A] text-base font-semibold">American Dental Medical University</li>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /> <span>MDS</span></li>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /><span>2003 - 2005</span></li>
                            </ul>
                            <h4 className="text-[#3B3A3A] text-xl font-bold pb-4 pt-6">Work & Experience</h4>
                            <ul>
                                <li className="text-[#3B3A3A] text-base font-semibold">Glowing smiles family dental clinic</li>
                                <li className="text-[#3B3A3A] text-base font-normal flex items-center"><BsDot /> <span>2010 - Present (5 years)</span></li>
                                <li className="text-[#3B3A3A] text-base font-semibold">Comfort care dental clinic</li>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /> <span>2007 - 2010 (3 years)</span></li>
                                <li className="text-[#3B3A3A] text-base font-semibold">Dream smile dental practice</li>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /> <span>2005 - 2007 (2 years)</span></li>
                            </ul>
                            <h4 className="text-[#3B3A3A] text-xl font-bold pb-4 pt-6">Services</h4>
                            <ul>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /><span>Tooth cleaning</span></li>
                                <li className="text-[#3B3A3A] text-base items-center flex font-normal"><BsDot /> <span>Root Canal Therapy</span></li>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /> <span>Implants</span></li>
                                <li className="text-[#3B3A3A] text-base flex items-center font-normal"><BsDot /> <span>Compsite bonding</span></li>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /> <span>Fisure sealants</span></li>
                                <li className="text-[#3B3A3A] text-base flex items-center font-normal"><BsDot /> <span>Sergical Extractions</span></li>
                            </ul>
                        </div>

                        <div>
                        <h4 className="text-[#3B3A3A] text-xl font-bold pb-4 pt-2">Awards</h4>
                            <ul>
                                <li className="text-[#3B3A3A] text-base font-normal">July 2019</li>
                                <li className="text-[#3B3A3A] text-base font-semibold">Humanitarian Awart</li>
                                <li className="text-[#3B3A3A] text-base flex font-normal"> <BsDot /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</span></li>
                                <li className="text-[#3B3A3A] text-base pt-5 font-normal">March 2019</li>
                                <li className="text-[#3B3A3A] text-base font-semibold">Certificate for International Voluntier Service</li>
                                <li className="text-[#3B3A3A] flex text-base font-normal"><BsDot /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. May 2008</span></li>
                                <li className="text-[#3B3A3A] text-base font-semibold">The Dental Professional of the Year</li>
                                <li className="text-[#3B3A3A] flex text-base font-normal"><BsDot /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. May 2008</span></li>
                            </ul>
                            
                            <h4 className="text-[#3B3A3A] text-xl font-bold pb-4 pt-6">Services</h4>
                            <ul>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /><span>Children Care</span></li>
                                <li className="text-[#3B3A3A] text-base items-center flex font-normal"><BsDot /> <span>Oral and Maxiofacial Surgery</span></li>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /> <span>Orthodontist</span></li>
                                <li className="text-[#3B3A3A] text-base flex items-center font-normal"><BsDot /> <span>Periodontist</span></li>
                                <li className="text-[#3B3A3A] flex items-center text-base font-normal"><BsDot /> <span>Prothodostics</span></li>
                            </ul>
                        </div>
                    </div>
                </div>}
                {activeTab === 2 && <div id="tab-content-2">Content for Tab 2</div>}
                {activeTab === 3 && <div id="tab-content-3">Content for Tab 3</div>}
                {activeTab === 4 && <div id="tab-content-3">Content for Tab 4</div>}
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;