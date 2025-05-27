import Dropdown from './Dropdown';
import humanbody from '../assets/human-body.png';
import lung from '../assets/lung.png';
import teeth from '../assets/teeth.png';
import bone from '../assets/bone.png';

const DashboardMainContent = () => {
    return (
        <div className="m-4 min-h-[80vh] w-full">
            {/* Header */}
            <div className="flex justify-between items-center text-3xl mb-4">
                <div className="text-blue-800">Dashboard</div>
                <Dropdown />
            </div>

            {/* Main Content Row */}
            <div className="w-full flex flex-col md:flex-row gap-4">
                {/* Human Body Image */}
                <div className="w-full md:w-1/2 bg-blue-50 rounded-3xl flex items-center justify-center p-6">
                    <img
                        src={humanbody}
                        alt="Human body diagram"
                        className="w-full h-auto max-w-[400px] object-contain"
                    />
                </div>

                {/* Organ Cards */}
                <div className="w-full md:w-1/2 flex flex-col justify-around gap-4 p-2">
                    {[{ icon: lung, label: 'Lung', color: 'bg-red-500' },
                      { icon: teeth, label: 'Teeth', color: 'bg-cyan-500' },
                      { icon: bone, label: 'Bone', color: 'bg-cyan-500' }].map((item, idx) => (
                        <div key={idx} className="bg-blue-50 rounded-3xl flex flex-col items-center p-4 shadow">
                            <div className="flex items-center mb-1">
                                <img src={item.icon} alt={`${item.label} icon`} className="w-12 h-12" />
                                <span className="ml-2 text-xl text-blue-800">{item.label}</span>
                            </div>
                            <span className="text-sm text-gray-400 mb-2">Date: 26 Oct 2025</span>
                            <div className="w-3/4 bg-gray-200 rounded-full h-2">
                                <div className={`${item.color} h-2 rounded-full`} style={{ width: '30%' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Activity Chart */}
            <div className="bg-white rounded-xl p-4 shadow-md w-full max-w-xl mt-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-blue-900">Activity</span>
                    <span className="text-sm text-gray-400">3 appointments this week</span>
                </div>
                <div className="flex justify-between items-end h-32 gap-2">
                    {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <div className="flex flex-col justify-end gap-1 h-24">
                                <div className="w-0.5 bg-gray-300 h-6" />
                                <div className="w-0.5 bg-cyan-400 h-10" />
                                <div className="w-0.5 bg-indigo-800 h-8" />
                                <div className="w-0.5 bg-gray-300 h-4" />
                            </div>
                            <span className="text-xs text-gray-500">{day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardMainContent;
