import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";

const ConnectUs = () => {
    return (
        <div className="flex justify-center gap-6 bg-white pb-28">
            <div className="flex justify-center rounded-lg gap-3 py-12 pl-12 pr-7 bg-[#07332F]">
                <CiClock2 className="w-[50px] h-[50px] text-white"/>
                <div>
                    <h2 className="text-white text-[24px] font-semibold">Opening Hours</h2>
                    <p className="text-white text-base font-normal">Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            <div className="flex justify-center rounded-lg gap-3 py-12 pl-12 pr-10 bg-[#F7A582]">
                <IoLocationOutline className="w-[50px] h-[50px] text-white"/>
                <div>
                <h2 className="text-white text-[24px] font-semibold">Our Locations</h2>
                <p className="text-white text-base font-normal">Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
                </div>
            </div>
            <div className="flex justify-center rounded-lg gap-3 py-12 pl-12 pr-7 bg-[#07332F]">
                <VscCallOutgoing className="w-[50px] h-[50px] text-white"/>
                <div>
                <h2 className="text-white text-[24px] font-semibold">Contact Us</h2>
                <p className="text-white text-base font-normal">+88 01750 00 00 00</p>
                <p className="text-white text-base font-normal">+88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default ConnectUs;