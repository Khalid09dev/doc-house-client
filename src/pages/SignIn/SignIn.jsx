import { Link } from "react-router-dom";

const SignIn = () => {
    const handleSignin = (e) => {
        e.preventDefault();
        console.log('clicking')
    }
    return (
        <div>
            <div className='md:flex grid md:h-screen'>
            <div className='bg-[#07332F] bg-right-top relative flex flex-col items-center md:w-1/2 bg-no-repeat' style={{backgroundImage: `url('https://i.postimg.cc/MH5fD0xK/doctor-frame.png')`}}>

                <img className='w-[370px] h-[370px] mt-60 ' src="https://i.postimg.cc/htVVdnmr/doctor.png" alt="#" />
            </div>
            <div className='md:flex justify-center items-center md:w-1/2'>
                <form onSubmit={handleSignin} className='border md:p-[50px] p-[30px] rounded-lg'>
                    <h3 className='text-[#0A0808] text-[20px] font-bold md:pb-8 pb-4 text-center md:px-14'>Sign In to Doc House</h3>

                    <label className='text-base font-semibold text-[#0A0808]'> Email Address</label> <br />
                    <input className='bg-[#F3F3F3] py-3 pl-3 w-full placeholder:text-[15px] rounded-lg mb-3' type="email" name="email" id="" placeholder="Enter your email"/> <br />
                    <label className='text-base font-semibold text-[#0A0808] mr-28 md:mr-32 '>Password</label> 
                    <Link to="/signin" className='text-[14px] font-normal text-[#F7A582]'>Forgot password</Link> <br />
                    <input className='bg-[#F3F3F3] py-3 pl-3 w-full placeholder:text-[15px] rounded-lg mb-4' type="password" name="password" id="" placeholder="Enter your password"/> <br />
                    <input className='bg-[#F7A582] py-3 rounded-lg text-base text-white font-semibold w-full mb-5 cursor-pointer' type="submit" value="Sign In" />
                <p className='text-base font-normal text-[#6C6B6B] text-center'>Please register at first. Go to <Link className='text-[#F7A582] font-semibold' to="/signup">SIGN UP</Link></p>
                </form>
            </div>
        </div>
        </div>
    );
};

export default SignIn;