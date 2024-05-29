// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


const PaytientReview = () => {
    return (
        <div className="bg-[#FFF]">
            <h2 className="text-[#0A0808] text-[40px] font-bold text-center pb-2">What Our Patients Says</h2>
            <p className="text-[#3B3A3A] text-base font-normal pb-10 text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            {/* swipper */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='flex'>
                    <div className='flex justify-center gap-6'>
                    <div className='border rounded-lg p-12'>
                        <div className='flex items-center gap-48'>
                            <div className='flex items-center gap-5'>
                                <img src="https://i.postimg.cc/MK6sR8M4/awlad.png" alt="" />
                                <span><h4 className='text-xl font-bold text-[#3B3A3A]'>Awlad Hossain</h4>
                                <p className='text-[#6C6B6B] text-base font-normal'>Product Designer</p></span>
                            </div>
                            <img src="https://i.postimg.cc/7PV9qQsN/quote.png" alt="#" />
                        </div>
                        <p className='text-[#6C6B6B] pt-5 text-[18px] font-normal'>Lorem Ipsum has been the industry’s standard dummy text <br /> ever since the 1500s, when an unknow printer tool a galley of <br /> type and scrambled it to make type specimen book has <br /> survived not only five centurines.</p>
                    </div>


                    <div className='border rounded-lg p-12'>
                        <div className='flex items-center gap-48'>
                            <div className='flex items-center gap-5'>
                                <img src="https://i.postimg.cc/26xQ8Vw5/farhana.png" alt="" />
                                <span><h4 className='text-xl font-bold text-[#3B3A3A]'>Farhana Hossain</h4>
                                <p className='text-[#6C6B6B] text-base font-normal'>Brand Designer</p></span>
                            </div>
                            <img src="https://i.postimg.cc/7PV9qQsN/quote.png" alt="#" />
                        </div>
                        <p className='text-[#6C6B6B] pt-5 text-[18px] font-normal'>Lorem Ipsum has been the industry’s standard dummy text <br /> ever since the 1500s, when an unknow printer tool a galley of <br /> type and scrambled it to make type specimen book has <br /> survived not only five centurines.</p>
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/26xQ8Vw5/farhana.png" alt="#" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PaytientReview;