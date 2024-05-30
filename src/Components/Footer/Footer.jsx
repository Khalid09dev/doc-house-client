
const Footer = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="flex justify-center gap-14 pt-28 pb-12">
            <div>
                <div className="flex items-center gap-3"><img className="w-[50px] h-[50px]" src="https://i.postimg.cc/5NXJfXs1/footer-logo.png" alt="#" />
                <h2 className="text-[30px] text-[#07332F] font-bold"><span className="text-[#F7A582]">Doc</span> House</h2></div>
                <p className="text-base text-[#3B3A3A] font-normal py-6">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. has been <br /> since the printer took.</p>
                <button className="text-base text-[#F7A582] font-bold py-2 px-5 rounded-lg border border-[#F7A582]">Appoinment</button>
            </div>
            <ul className="text-[#6C6B6B] text-[18px] font-semibold">
                <li className="text-[#0A0808] text-2xl font-bold pb-3"><a href="#">Quick Links</a></li>
                <li className="pb-2"><a href="#">About Us</a></li>
                <li className="pb-2"><a href="#">Service</a></li>
                <li className="pb-2"><a href="#">Doctors</a></li>
                <li className="pb-2"><a href="#">Departments</a></li>
                <li className="pb-2"><a href="#">Online Payment</a></li>
                <li className="pb-2"><a href="#">Contact Us</a></li>
                <li className="pb-2"><a href="#">My Account</a></li>
            </ul>
            <ul className="text-[#6C6B6B] text-[18px] font-semibold">
                <li className="text-[#0A0808] text-2xl font-bold pb-3"><a href="#">Doc House Services</a></li>
                <li className="pb-2"><a href="#">Padiatric Clinic</a></li>
                <li className="pb-2"><a href="#">Diagnosis clinic</a></li>
                <li className="pb-2"><a href="#">Cardiac Clinic</a></li>
                <li className="pb-2"><a href="#">Labratory Analicys</a></li>
                <li className="pb-2"><a href="#">Gyneological Clinic</a></li>
                <li className="pb-2"><a href="#">Personal Consulting</a></li>
                <li className="pb-2"><a href="#">Dental Clinic</a></li>
            </ul>
            <ul className="text-[#6C6B6B] text-[18px] font-semibold">
                <li className="text-[#0A0808] text-2xl font-bold pb-3"><a href="#">Working Hours</a></li>
                <li className="pb-2"><a href="#">Monday - 10 am to 7 pm</a></li>
                <li className="pb-2"><a href="#">Tuesday - 10 am to 7 pm</a></li>
                <li className="pb-2"><a href="#">Wednesday - 10 am to 7 pm</a></li>
                <li className="pb-2"><a href="#">Thursday - 10 am to 7 pm</a></li>
                <li className="pb-2"><a href="#">Friday - 10 am to 7 pm</a></li>
                <li className="pb-2"><a href="#">Saturday - 10 am to 7 pm</a></li>
                <li className="pb-2"><a href="#">Sunday - 10 am to 7 pm</a></li>
            </ul>
        </div>
        <hr className="mx-52"/>
        <p className="text-[#6C6B6B] py-14 text-center text-[18px] font-normal">Copyright © 2024 - All right reserved by Doc House Ltd</p>
        </div>
    );
};

export default Footer;