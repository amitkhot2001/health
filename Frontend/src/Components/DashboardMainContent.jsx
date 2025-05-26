import Dropdown from './Dropdown';
import humanbody from '../assets/human-body.png';

import lung from '../assets/lung.png';
import teeth from '../assets/teeth.png';
import bone from '../assets/bone.png';

const DashboardMainContent = () => {
    return (
        <div className="m-4 min-h-screen">
            <div className="flex justify-between items-center text-3xl mb-4">
                <div className="text-blue-800">Dashboard</div>
                <Dropdown />
            </div>

            <div className="w-full h-[50%] flex gap-4">


                <div className="md:w-1/2 w-96 h-[50%] bg-blue-50 rounded-3xl flex items-center justify-center p-10 md:p-0">
                    <img src={humanbody} alt="Human body diagram" className="w-full h-auto max-w-full" />
                </div>

                <div className="md:w-1/2 h-96 flex-1 flex flex-col  rounded-3xl gap-3 pl-6 md:p-2  ">

                    <div className="w-80 flex-1 bg-blue-50 flex flex-col justify-center items-center rounded-4xl p-4 md:w-64 md:h-24">
                        <div className='flex items-center'>
                            <img src={lung} alt="Lung icon" className="w-16 h-16 md:w-12 md:h-12" />
                            <span className="ml-2 text-2xl text-blue-800">Lung</span>
                        </div>
                        <div className='mt-1'>
                            <span className="text-gray-400">Date: 26 Oct 2025</span>
                        </div>

                        <div className="w-3/4 bg-gray-200 rounded-full h-2 m-4">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>

                    </div>

                    <div className="w-80 flex-1 bg-blue-50 flex flex-col justify-center items-center rounded-4xl p-4 md:w-64 md:h-24">
                        <div className='flex items-center'>
                            <img src={teeth} alt="Teeth icon" className="w-16 h-16 md:w-12 md:h-12" />
                            <span className="ml-2 text-2xl text-blue-800">Teeth</span>
                        </div>
                        <div className='mt-1'>
                            <span className="text-gray-400">Date: 26 Oct 2025</span>
                        </div>

                         <div className="w-3/4 bg-gray-200 rounded-full h-2 m-4">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>

                    </div>

                    <div className="w-80 flex-1 bg-blue-50 flex flex-col justify-center items-center rounded-4xl p-4 md:w-64 md:h-24">
                        <div className="flex items-center">
                            <img src={bone} alt="Bone icon" className="w-16 h-16 md:w-12 md:h-12" />
                            <span className="ml-2 text-2xl text-blue-800">Bone</span>
                        </div>

                        <div className="mt-1">
                            <span className="text-gray-400">Date: 26 Oct 2025</span>
                        </div>

                        <div className=" bg-gray-200 rounded-full h-2 m-4 w-3/4">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                    </div>

                </div>

                
            </div>
            {/* <div className='w-full h-32 bg-red-200'>hi</div> */}
        </div>
    );
};

export default DashboardMainContent;
