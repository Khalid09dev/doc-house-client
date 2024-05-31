import {NavLink} from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const MyAppoinment = () => {
    return (
        <div>
            <div className='fixed bottom-0 top-0 right-0 left-0'><Navbar></Navbar></div>
            {/* dashboard sidebar */}
            <div className='fixed md:block hidden bg-[#FFFFFF]  top-0 bottom-0 left-0 mt-[70px]'>
                <ul>
                    <li className='pl-10 pt-5 pr-14 text-[#000000] text-[16px] font-normal'><NavLink>My Appointments</NavLink></li>
                </ul>
            </div>
            
            {/* dashboard content */}
            <div className='flex-1 pt-20 md:pl-52 min-h-screen bg-[#F1F5F9] md:block '>
                <div className='flex md:pt-0 pt-4 justify-around items-center'>
                    <h3 className='text-[#000000] text-2xl font-normal'>My Appointment</h3>
                    <button className='text-[#000000] text-base font-normal py-3 px-3 border rounded-lg border-[#000000]'>MAY 10, 2022</button>
                </div>

                <table className='mt-6'>
                    <thead>
                        <tr className='text-[#000000] py-3 rounded-t-lg text-base font-bold bg-[#E6E6E6] flex md:mx-36 mx-3 md:gap-52 gap-10'>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th className='pl-10'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className='flex border text-[#000000] text-base font-normal items-center md:mx-36 mx-3 px-6 md:gap-40 gap-4 bg-white py-3'>
                        <th>1</th>
                        <td>John Doe</td>
                        <td>Teeth Orthodontics</td>
                        <td>08.30 AM - 09.00 AM</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;