import {Link} from 'react-router-dom';

const SignUp = () => {

    return (
        <div className='flex h-screen'>
            <div className='bg-[#07332F] bg-right-top relative flex flex-col items-center w-1/2 bg-no-repeat' style={{backgroundImage: `url('https://i.postimg.cc/MH5fD0xK/doctor-frame.png')`}}>

                <img className='w-[370px] h-[370px] mt-60 ' src="https://i.postimg.cc/htVVdnmr/doctor.png" alt="#" />
            </div>
            <div className='flex justify-center items-center w-1/2'>
                <form className='border p-[50px] rounded-lg'>
                    <h3 className='text-[#0A0808] text-[20px] font-bold pb-8 text-center px-14'>Sign Up to Doc House</h3>

                    <label className='text-base font-semibold text-[#0A0808]'>Name</label> <br />
                    <input className='bg-[#F3F3F3] py-3 pl-3 w-full placeholder:text-[15px] rounded-lg mb-3' type="text" name="name" id="" placeholder="Enter your name"/> <br />
                    <label className='text-base font-semibold text-[#0A0808]'>Username</label> <br />
                    <input className='bg-[#F3F3F3] py-3 pl-3 w-full placeholder:text-[15px] rounded-lg mb-3' type="text" name="username" id="" placeholder="Enter your username"/> <br />
                    <label className='text-base font-semibold text-[#0A0808]'>Email</label> <br />
                    <input className='bg-[#F3F3F3] py-3 pl-3 w-full placeholder:text-[15px] rounded-lg mb-3' type="email" name="email" id="" placeholder="Enter your email"/> <br />
                    <label className='text-base font-semibold text-[#0A0808]'>Password</label> <br />
                    <input className='bg-[#F3F3F3] py-3 pl-3 w-full placeholder:text-[15px] rounded-lg mb-4' type="password" name="password" id="" placeholder="Enter your password"/> <br />
                    <input className='bg-[#F7A582] py-3 rounded-lg text-base text-white font-semibold w-full mb-5 cursor-pointer' type="submit" value="Create Account" />
                <p className='text-base font-normal text-[#6C6B6B] text-center'>Already Registered? Go to <Link className='text-[#F7A582] font-semibold' to="/login">SIGN IN</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;