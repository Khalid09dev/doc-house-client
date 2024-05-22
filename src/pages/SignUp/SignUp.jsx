import {Link} from 'react-router-dom';

const SignUp = () => {

    return (
        <div className='flex h-screen'>
            <div className='bg-[#07332F] bg-right-top relative flex flex-col items-center w-1/2 bg-no-repeat' style={{backgroundImage: `url('https://i.postimg.cc/MH5fD0xK/doctor-frame.png')`}}>
                {/* <img className='h-[300px] w-[400] relative left-24' src="" alt="#" /> */}
                <img className='w-[370px] h-[370px] mt-60 ' src="https://i.postimg.cc/htVVdnmr/doctor.png" alt="#" />
            </div>
            <div className='flex justify-center w-1/2'>
                <form>
                    <h3>Sign Up to Doc House</h3>

                    <label>Name</label> <br />
                    <input type="text" name="name" id="" placeholder="Enter your name"/> <br />
                    <label>Username</label> <br />
                    <input type="text" name="username" id="" placeholder="Enter your username"/> <br />
                    <label>Email</label> <br />
                    <input type="email" name="email" id="" placeholder="Enter your email"/> <br />
                    <label>Password</label> <br />
                    <input type="password" name="password" id="" placeholder="Enter your password"/> <br />
                    <input type="submit" value="Create Account" />
                <p>Already Registered? Go to <Link to="/login">SIGN IN</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;