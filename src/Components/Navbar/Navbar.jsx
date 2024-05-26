import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar md:flex md:justify-center flex justify-between bg-base-100">
            <div className="navbar-start flex justify-between items-center w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink><a>Home</a></NavLink>
                        <NavLink><a>About</a></NavLink>
                        <NavLink><a>Appointment</a></NavLink>
                        <NavLink><a>Login</a></NavLink>
                    </ul>
                </div>
                <Link to="/" className='flex items-center text-[25px] font-bold gap-1'><img className="h-[35px] w-[35px]" src="https://i.postimg.cc/rF9CzMLL/logo.png" alt="#" /><span className='text-[#F7A582]'>Doc</span><span className='text-[#FFF]'>House</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#F3F3F3] text-[15px] font-medium gap-7">
                    <NavLink><a>Home</a></NavLink>
                    <NavLink><a>About</a></NavLink>
                    <NavLink><a>Appointment</a></NavLink>
                    <NavLink><a>Login</a></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
