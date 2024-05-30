import { IoLocationOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";

const ContactWithUs = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center rounded-lg mx-28 bg-[#07332F] gap-6 py-20 px-20">
            <div>
                <h1 className="text-[#FFFFFF] text-[35px]  font-bold pb-3">Contact With Us</h1>
                <p className="text-white text-base font-normal pb-7">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab illo inve ntore <br /> veritatis et quasi.</p>
                <div className="flex gap-2 items-center pb-2"><VscCallOutgoing className="w-[30px] h-[30px] text-white"/><span className="text-base text-[#FFF] font-normal">+88 01750 14 14 14</span></div>
                <div className="flex gap-2 items-center"><IoLocationOutline className="w-[30px] h-[30px] text-white"/><span className="text-base text-[#FFF] font-normal">Dhanmondi, Dhaka, Bangladesh</span></div>
            </div>
            <form className="grid grid-cols-2 gap-5">
                <input className="bg-[#FFFFFF0D] pl-5 placeholder:text-white placeholder:font-normal placeholder:text-base py-3 rounded-lg" type="text" name="name" id="" placeholder="Name"/> 
                <input className="bg-[#FFFFFF0D] pl-5 placeholder:text-white placeholder:font-normal placeholder:text-base py-3 rounded-lg" type="email" name="email" id="" placeholder="Email"/>
                <input className="bg-[#FFFFFF0D] pl-5 placeholder:text-white placeholder:font-normal placeholder:text-base py-3 rounded-lg" type="number" name="number" id="" placeholder="Mobile Number"/>
                <input className="bg-[#FFFFFF0D] pl-5 placeholder:text-white placeholder:font-normal placeholder:text-base py-3 rounded-lg" type="text" name="doctor-name" id="" placeholder="Doctor Name"/>
                <input className="bg-[#FFFFFF0D] pl-5 placeholder:text-white placeholder:font-normal placeholder:text-base py-3 rounded-lg" type="date" name="date" id="" placeholder="Date"/>
                <input className="bg-[#FFFFFF0D] pl-5 placeholder:text-white placeholder:font-normal placeholder:text-base py-3 rounded-lg" type="time" name="time" id="" placeholder="Time"/>
                <button className="text-white bg-[#F7A582] col-span-2 text-xl font-semibold rounded-lg py-3">Book Now</button>
            </form>
        </div>
        </div>
    );
};

export default ContactWithUs;