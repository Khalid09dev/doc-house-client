import {NavLink, Outlet,useNavigate} from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useEffect } from 'react';

const Dashboard = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate('/dashboard/adminDashboard')
    }, [navigate])
    return (
        <div>
            <div className='fixed top-0 right-0 left-0'><Navbar></Navbar></div>
            <div className='flex gap-20 bg-[#F1F5F9]'>
                <div className='bg-white mt-[70px] fixed top-0 bottom-0 left-0'>
                    <ul className='px-16'>
                        <li className='text-[#383838] text-xl font-bold py-4'><NavLink to="adminDashboard">Dashboard</NavLink></li>
                        <li className='text-[#383838] text-xl font-bold pb-4'><NavLink to="allUsers">All Users</NavLink></li>
                        <li className='text-[#383838] text-xl font-bold pb-4'><NavLink to="addDoctor">Add a Doctor</NavLink></li>
                        <li className='text-[#383838] text-xl font-bold pb-4'><NavLink to="manageDoctor">Manage Doctors</NavLink></li>
                        <li className='text-[#383838] text-xl font-bold pb-4'><NavLink to="/">Home</NavLink></li>
                    </ul>
                </div>
                <div className='ml-[350px] pt-16 min-h-screen'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;



