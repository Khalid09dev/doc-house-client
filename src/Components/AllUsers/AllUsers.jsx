
const AllUsers = () => {
    return (
        <div>
            <h3 className="text-[#000000] text-2xl font-bold pt-5">All Users: 8</h3>
            <div className='flex-1 pt-5 min-h-screen bg-[#F1F5F9] '>
                <table className='mt-6'>
                    <thead>
                        <tr className='text-[#000000] py-3 rounded-t-lg text-base font-bold bg-[#E6E6E6] flex mx-3 md:gap-52 gap-10'>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th className='pl-10'>Favourite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className='flex border text-[#000000] text-base font-normal items-center mx-3 px-6 md:gap-40 gap-4 bg-white py-3'>
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

export default AllUsers;