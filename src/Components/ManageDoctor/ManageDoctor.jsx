
const ManageDoctor = () => {
    return (
        <div>
            <div>
            <h3 className="text-[#000000] text-2xl font-bold pt-5">Manage Doctors: 08</h3>
            <div className='flex-1 pt-5 min-h-screen bg-[#F1F5F9]'>
                <table className='mt-6'>
                    <thead>
                        <tr className='text-[#000000] py-3 rounded-t-lg text-base font-bold bg-[#E6E6E6] flex mx-3 md:gap-36 gap-10'>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th className='pl-10'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className='flex border text-[#000000] text-base font-normal items-center mx-3 px-6 md:gap-32 gap-4 bg-white py-3'>
                        <th>1</th>
                        <td><img className="w-10 h-10 rounded-full" src="" alt="#" /></td>
                        <td>John Doe</td>
                        <td>Teeth Orthodontics</td>
                        <td><button className="text-[#FFFFFF] text-base py-1 px-3 rounded-md font-semibold bg-[#E11244]">Delete</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageDoctor;