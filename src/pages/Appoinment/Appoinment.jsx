import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Appoinment = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='bg-no-repeat py-20 bg-cover' style={{backgroundImage: `url('https://i.postimg.cc/Vkhftfyw/landing-bg.png')`}}>
            <div className='md:flex grid justify-center gap-10'>
                <Calendar className="p-3 rounded-lg mx-auto" onChange={onChange} value={value} />
                <img className='md:mx-0 px-7' src="https://i.postimg.cc/KYKn78RD/chair-1.png" alt="#" />
            </div>

            <p className='text-[#F7A582] text-[20px] pt-20 font-normal text-center'>Available Services on April 30, 2022</p>
            <h3 className='text-[#3B3A3A] text-center text-[35px] font-bold'>Please select a service</h3>

                {/* modal */}
                <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle bg-[#07332F] absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl text-[#000000] pb-11">Cavity Protection</h3>
                    <input className='bg-[#E6E6E6] py-3 pl-3 w-full mb-4 rounded-lg' type="date" name="date" id=""/> <br />
                    <input className='bg-[#E6E6E6] py-3 pl-3 mb-4 w-full rounded-lg' type="time" name="time" id=""/>
                    <input className='pl-3 py-3 w-full placeholder:text-base placeholder:font-normal placeholder:text-[#CFCFCF] mb-4 rounded-lg bg-white border' type="text" name="full-name" id="" placeholder='Full Name'/>
                    <input className='pl-3 py-3 w-full placeholder:text-base placeholder:font-normal placeholder:text-[#CFCFCF] border mb-4 rounded-lg bg-white' type="number" name="phone-number" id="" placeholder='Phone Number'/>
                    <input className='pl-3 py-3 w-full placeholder:text-base placeholder:font-normal placeholder:text-[#CFCFCF] rounded-lg border bg-white mb-4' type="email" name="email" id="" placeholder='Email'/>
                    <input className='bg-[#07332F] text-base font-bold py-3 w-full rounded-lg cursor-pointer' type="submit" value="SUBMIT" />
                </div>
                </dialog>
                {/* modal */}

            <div className='md:flex grid justify-center gap-4 pt-8'>
                <div onClick={()=>document.getElementById('my_modal_3').showModal()} className='flex items-center cursor-pointer rounded-lg w-[256px] bg-white border p-4 shadow-lg gap-4'>
                    <img className='bg-[#FF41551A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/wBxzjzXX/006-broken-tooth.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold leading-6'>Teeth <br /> Orthodontics</h2>
                </div>
                <div className='flex bg-white border rounded-lg w-[256px] p-4 shadow-lg gap-4'>
                    <img className='bg-[#FFDBBD1A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/XqbQnjF3/cosmetic-destisty.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Cosmetic <br /> Dentisty</h2>
                </div>
                <div className='flex bg-white border rounded-lg w-[256px] p-4 shadow-lg gap-4'>
                    <img className='bg-[#FF41551A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/Qt4d3tvK/teetch-cleaning.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Teeth <br /> Cleaning</h2>
                </div>
            </div>

        <div className='md:flex grid justify-center gap-4 pt-4'>
            <div className='flex bg-white w-[256px] border rounded-lg p-4 shadow-lg gap-4'>
                    <img className='bg-[#37D4E91A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/zfTx6Hbp/cavity-protection.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Cavity <br />Protection</h2>
                </div>
                <div className='flex bg-white border w-[256px] p-4 rounded-lg shadow-lg gap-4'>
                    <img className='bg-[#F58A971A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/8zXFGZWz/padiatric-dental.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Pediatric <br /> Dental</h2>
                </div>
                <div className='flex bg-white border w-[256px] p-4 rounded-lg shadow-lg gap-4'>
                    <img className='bg-[#FFC1071A] w-[70px] h-[70px] p-3 rounded-lg' src="https://i.postimg.cc/90N30wBZ/oral-surgery.png" alt="#" />
                    <h2 className='text-[#3B3A3A] text-[22px] font-bold'>Oral <br /> Surgery</h2>
                </div>
            </div>

            <h2 className='text-[#3B3A3A] text-[40px] pb-7 font-bold text-center pt-20'>Available slots for Teeth Orthodontics.</h2>

            <div className='grid md:grid-cols-3 md:mx-44 mx-10 gap-5'>
                <div className='bg-white py-14 rounded-lg shadow-lg'>
                    <img className='bg-[#01D0FB0D] w-24 h-24 p-5 rounded-full mx-auto' src="https://i.postimg.cc/W4V8JyZN/004-dental.png" alt="#" />
                    <h3 className='text-[#3B3A3A] text-center pt-4 text-[23px] font-bold'>Teeth Orthodontics</h3>
                    <p className='text-[#000000] text-base text-center pb-5 font-normal'>8:00 AM - 9:00 AM</p>
                    <div className='flex justify-center'><button className='bg-[#F7A582] rounded-lg py-3 px-6 text-white'>Book Appoinment</button></div>
                </div>
                <div className='bg-white py-14 rounded-lg shadow-lg'>
                    <img className='bg-[#01D0FB0D] w-24 h-24 mx-auto p-5 rounded-full' src="https://i.postimg.cc/NfzmczDJ/005-tooth-whitening.png" alt="#" />
                    <h3 className='text-[#3B3A3A] text-center pt-4 text-[23px] font-bold'>Teeth Orthodontics</h3>
                    <p className='text-[#000000] text-center text-base pb-5 font-normal'>8:00 AM - 9:00 AM</p>
                    <div className='flex justify-center'><button className='bg-[#F7A582] rounded-lg py-3 px-6 text-white'>Book Appoinment</button></div>
                </div>
                <div className='bg-white py-14 rounded-lg shadow-lg'>
                    <img className='bg-[#01D0FB0D] w-24 h-24 p-5 mx-auto rounded-full' src="https://i.postimg.cc/vB6JHkwQ/001-dental-checkup.png" alt="#" />
                    <h3 className='text-[#3B3A3A] pt-4 text-center text-[23px] font-bold'>Teeth Orthodontics</h3>
                    <p className='text-[#000000] text-center text-base pb-5 font-normal'>8:00 AM - 9:00 AM</p>
                    <div className='flex justify-center'><button className='bg-[#F7A582] rounded-lg py-3 px-6 text-white'>Book Appoinment</button></div>
                </div>
                <div className='bg-white py-14 rounded-lg shadow-lg'>
                    <img className='bg-[#01D0FB0D] w-24 h-24 p-5 mx-auto rounded-full' src="https://i.postimg.cc/1tcLq6XT/002-decayed.png" alt="#" />
                    <h3 className='text-[#3B3A3A] text-center pt-4 text-[23px] font-bold'>Teeth Orthodontics</h3>
                    <p className='text-[#000000] text-center text-base pb-5 font-normal'>8:00 AM - 9:00 AM</p>
                    <div className='flex justify-center'><button className='bg-[#F7A582] rounded-lg py-3 px-6 text-white'>Book Appoinment</button></div>
                </div>
                <div className='bg-white py-14 rounded-lg shadow-lg'>
                    <img className='bg-[#01D0FB0D] mx-auto w-24 h-24 p-5 rounded-full' src="https://i.postimg.cc/5yKKBmVP/003-bacteria.png" alt="#" />
                    <h3 className='text-[#3B3A3A] pt-4 text-center text-[23px] font-bold'>Teeth Orthodontics</h3>
                    <p className='text-[#000000] text-center text-base pb-5 font-normal'>8:00 AM - 9:00 AM</p>
                    <div className='flex justify-center'><button className='bg-[#F7A582] rounded-lg py-3 px-6 text-white'>Book Appoinment</button></div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;