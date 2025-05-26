import Dropdown from './Dropdown';
import humanbody from '../assets/human-body.png';

import lung from '../assets/lung.png';
import teeth from '../assets/teeth.png';
import bone from '../assets/bone.png';

const DashboardMainContent = () => {
    return (
        <div className="m-4">
            <div className="flex justify-between items-center text-3xl mb-4">
                <div className="text-blue-800">Dashboard</div>
                <Dropdown />
            </div>

            <div className="w-full h-[500px] flex gap-4">

                <div className="w-96 h-full bg-blue-50 rounded-3xl flex items-center justify-center p-10">
                    <img src={humanbody} alt="Human body diagram" className="w-full h-auto max-w-full" />
                </div>

                <div className="flex-1 flex flex-col  rounded-3xl gap-3 pl-6 ">

                    <div className="w-80 flex-1 bg-blue-50 flex flex-col justify-center items-center rounded-4xl p-4">
                        <div className='flex items-center'>
                            <img src={lung} alt="Lung icon" className="w-16 h-16" />
                            <span className="ml-2 text-2xl text-blue-800">Lung</span>
                        </div>
                        <div className='mt-1'>
                            <span className="text-gray-400">Date: 26 Oct 2025</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2 m-4">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>

                    </div>

                    <div className="w-80 flex-1 bg-blue-50 flex flex-col justify-center items-center rounded-4xl p-4">
                        <div className='flex items-center'>
                            <img src={teeth} alt="Teeth icon" className="w-16 h-16" />
                            <span className="ml-2 text-2xl text-blue-800">Teeth</span>
                        </div>
                        <div className='mt-1'>
                            <span className="text-gray-400">Date: 26 Oct 2025</span>
                        </div>

                         <div className="w-full bg-gray-200 rounded-full h-2 m-4">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>

                    </div>

                    <div className="w-80 flex-1 bg-blue-50 flex flex-col justify-center items-center rounded-4xl p-4">
                        <div className="flex items-center">
                            <img src={bone} alt="Bone icon" className="w-16 h-16" />
                            <span className="ml-2 text-2xl text-blue-800">Bone</span>
                        </div>

                        <div className="mt-1">
                            <span className="text-gray-400">Date: 26 Oct 2025</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2 m-4">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                    <div className='text-blue-800 '>Details</div>

                </div>

                
            </div>
        </div>
    );
};

export default DashboardMainContent;
