import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Appoinment = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='bg-no-repeat py-20 bg-cover' style={{backgroundImage: `url('https://i.postimg.cc/Vkhftfyw/landing-bg.png')`}}>
            <div className='flex justify-center gap-10'>
                <Calendar className="p-3 rounded-lg" onChange={onChange} value={value} />
                <img src="https://i.postimg.cc/KYKn78RD/chair-1.png" alt="#" />
            </div>

            <p className='text-[#F7A582] text-[20px] pt-20 font-normal text-center'>Available Services on April 30, 2022</p>
            <h3 className='text-[#3B3A3A] text-center text-[35px] font-bold'>Please select a service</h3>

            <div className='flex justify-center gap-4 pt-8'>
                <div className='flex items-center rounded-lg w-[256px] bg-white border p-4 shadow-lg gap-4'>
                    <img className='bg-[#FF41551A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/wBxzjzXX/006-broken-tooth.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold leading-6'>Teeth <br /> Orthodontics</h2>
                </div>
                <div className='flex bg-white border rounded-lg w-[256px] p-4 shadow-lg gap-4'>
                    <img className='bg-[#FF41551A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/XqbQnjF3/cosmetic-destisty.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Cosmetic <br /> Dentisty</h2>
                </div>
                <div className='flex bg-white border rounded-lg w-[256px] p-4 shadow-lg gap-4'>
                    <img className='bg-[#FF41551A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/Qt4d3tvK/teetch-cleaning.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Teeth <br /> Cleaning</h2>
                </div>
            </div>

        <div className='flex justify-center gap-4 pt-4'>
            <div className='flex bg-white w-[256px] border rounded-lg p-4 shadow-lg gap-4'>
                    <img className='bg-[#FF41551A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/zfTx6Hbp/cavity-protection.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Cavity <br />Protection</h2>
                </div>
                <div className='flex bg-white border w-[256px] p-4 rounded-lg shadow-lg gap-4'>
                    <img className='bg-[#FF41551A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/8zXFGZWz/padiatric-dental.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Pediatric <br /> Dental</h2>
                </div>
                <div className='flex bg-white border w-[256px] p-4 rounded-lg shadow-lg gap-4'>
                    <img className='bg-[#FF41551A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/90N30wBZ/oral-surgery.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Oral <br /> Surgery</h2>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;