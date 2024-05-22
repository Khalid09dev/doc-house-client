import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <h2 className="text-[#0A0808] text-center text-[50px] font-bold">Sorry<span className="text-[40px]">,</span></h2>
                <h3 className="text-[40px] font-normal text-[#6C6B6B] text-center">This page is not found.</h3>
                <img src="https://i.postimg.cc/Qt9Jpv5m/404.png" alt="#" />
                <div className='flex justify-center'>
                    <Link className='text-white text-base rounded-lg font-semibold py-3 bg-[#F7A582] px-14' to="/">Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;