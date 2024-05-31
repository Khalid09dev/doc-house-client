import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, } from 'recharts';


const data = [
        {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
        },
        {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
        },
        {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
        },
        {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
        },
        {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
        },
        {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    }
];


    const data2 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    // custom function for piChart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    
const AdminDashboard = () => {
    return (
        <div className="bg-[#F1F5F9] pb-16">
            <div className="flex justify-center gap-6 pt-16">
                <div className="bg-[#FFFFFF] rounded-xl pl-7 w-full pr-20 py-7">
                    <div className="flex items-center gap-4">
                        <img className="bg-[#FF00341A] p-3 rounded-lg w-14 h-14" src="https://i.postimg.cc/vHPsd4df/doctor.png" alt="#" />
                        <span className="text-[45px] text-[#6C6B6B] font-bold">168</span>
                    </div>
                    <progress className="progress progress-error w-56" value="70" max="100"></progress>
                    <p className="text-[#3B3A3A] text-base font-bold">Doctor</p>
                </div>
                <div className="bg-[#FFFFFF] rounded-xl pl-7 w-full pr-20 py-7">
                    <div className="flex items-center gap-4">
                        <img className="bg-[#7BB13C1A] p-3 rounded-lg w-14 h-14" src="https://i.postimg.cc/d1XyXsVY/patient.png" alt="#" />
                        <span className="text-[45px] text-[#6C6B6B] font-bold">487</span>
                    </div>
                    <progress className="progress progress-accent w-56" value="70" max="100"></progress>
                    <p className="text-[#3B3A3A] text-base font-bold">Doctor</p>
                </div>
                <div className="bg-[#FFFFFF] rounded-xl pl-7 w-full pr-20 py-7">
                    <div className="flex items-center gap-4">
                        <img className="bg-[#FFBC341A] p-3 rounded-lg w-14 h-14" src="https://i.postimg.cc/QtXscwGZ/appoinment.png" alt="#" />
                        <span className="text-[45px] text-[#6C6B6B] font-bold">95</span>
                    </div>
                    <progress className="progress progress-warning w-56" value="70" max="100"></progress>
                    <p className="text-[#3B3A3A] text-base font-bold">Appointment</p>
                </div>
            </div>


            <div className='flex gap-16 pt-10 justify-center'>
                <div style={{width: '50%'}} className='p-10 bg-white rounded-lg'>
                <ResponsiveContainer width="100%" height={200}>
                    <h2 className='text-[#898989] text-xl font-bold pb-3'>Patient</h2>
                    <hr className='border-t-2 pb-20'/>
                <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
                </div>
                <div className='py-10 px-7 bg-white rounded-xl'>
                    <h2 className='text-[#898989] text-xl pb-3 font-bold'>Appoinment</h2>
                    <hr className='border-t-2'/>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data2}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value">
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;