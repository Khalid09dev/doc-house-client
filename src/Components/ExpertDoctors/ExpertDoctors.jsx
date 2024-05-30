import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";


const ExpertDoctors = () => {
    return (
        <div className="bg-white py-32">
            <h2 className="text-center text-[#0A0808] text-[40px] font-bold">Our Expert Doctors</h2>
            <p className="text-[#3B3A3A] text-base font-normal text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <div className="flex justify-center gap-6 pt-12"> 
            <div className="border p-5 rounded-lg">
                <img src="https://i.postimg.cc/qvxxsK6H/doc-1.png" alt="#" />
                <h4 className="text-xl font-bold text-[#3B3A3A] pt-4">Karyen Anderson</h4>
                <p className="text-[#6C6B6B] text-base font-normal pb-1">BTP - Senior Physiotherapist</p>
                <div className="flex pb-3 gap-1"><FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/></div>
                <hr className="pb-3"/>
                <div className="flex gap-4 items-center pb-1"><CiLocationOn className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">Dhanmondi, Dhaka, Bangladesh</span></div>
                <div className="flex gap-4 items-center pb-1"><CiCalendar className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">Available On Mon, 22 December</span></div>
                <div className="flex gap-4 items-center pb-3"><HiOutlineCurrencyDollar  className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">$15</span></div>
                <button className="text-[#F7A582] text-xl font-semibold py-3 w-full border border-[#F7A582] rounded-lg hover:bg-[#F7A582] duration-300 hover:text-white">View Profile</button>
            </div>
            <div className="border p-5 rounded-lg">
                <img src="https://i.postimg.cc/MpqypGPP/doc-2.png" alt="#" />
                <h4 className="text-xl font-bold text-[#3B3A3A] pt-4">Karyen Anderson</h4>
                <p className="text-[#6C6B6B] text-base font-normal pb-1">BTP - Senior Physiotherapist</p>
                <div className="flex pb-3 gap-1"><FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/></div>
                <hr className="pb-3"/>
                <div className="flex gap-4 items-center pb-1"><CiLocationOn className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">Dhanmondi, Dhaka, Bangladesh</span></div>
                <div className="flex gap-4 items-center pb-1"><CiCalendar className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">Available On Mon, 22 December</span></div>
                <div className="flex gap-4 items-center pb-3"><HiOutlineCurrencyDollar  className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">$15</span></div>
                <button className="text-[#F7A582] text-xl font-semibold py-3 w-full border border-[#F7A582] rounded-lg hover:bg-[#F7A582] duration-300 hover:text-white">View Profile</button>
            </div>
            <div className="border p-5 rounded-lg">
                <img src="https://i.postimg.cc/jqfN6fB3/doc-3.png" alt="#" />
                <h4 className="text-xl font-bold text-[#3B3A3A] pt-4">Karyen Anderson</h4>
                <p className="text-[#6C6B6B] text-base font-normal pb-1">BTP - Senior Physiotherapist</p>
                <div className="flex pb-3 gap-1"><FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/>
                <FaStar className="text-[#F2871D] text-xl"/></div>
                <hr className="pb-3"/>
                <div className="flex gap-4 items-center pb-1"><CiLocationOn className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">Dhanmondi, Dhaka, Bangladesh</span></div>
                <div className="flex gap-4 items-center pb-1"><CiCalendar className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">Available On Mon, 22 December</span></div>
                <div className="flex gap-4 items-center pb-3"><HiOutlineCurrencyDollar  className="text-[21px] text-[#6C6B6B]"/><span className="text-base font-normal text-[#6C6B6B]">$15</span></div>
                <button className="text-[#F7A582] text-xl font-semibold py-3 w-full border border-[#F7A582] rounded-lg hover:bg-[#F7A582] duration-300 hover:text-white">View Profile</button>
            </div>
            </div>

        </div>
    );
};

export default ExpertDoctors;