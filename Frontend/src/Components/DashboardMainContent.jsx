import Dropdown from './Dropdown';
import humanbody from '../assets/human-body.png';
import lung from '../assets/lung.png';
import teeth from '../assets/teeth.png';
import bone from '../assets/bone.png';

const DashboardMainContent = () => {
    return (
        <div className="flex-1 w-full flex flex-col p-2 sm:p-4 h-full">

            {/* Header */}
            <div className="flex justify-between items-center mb-4 shrink-0">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-800">Dashboard</h1>
                <Dropdown />
            </div>

            {/* Main Content Grid - Takes all available space */}
            <div className="flex flex-col gap-4 flex-1">

                {/* Top Section - Body Diagram and Health Cards - Takes 70% of space */}
                <div className="flex flex-col lg:flex-row gap-4 flex-[7] min-h-0">

                    {/* Human Body Diagram - Full height */}
                    <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl flex items-center justify-center p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                        <img
                            src={humanbody}
                            alt="Human body diagram"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Health Status Cards - Evenly distributed */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4">
                        {[
                            { icon: lung, label: 'Lung', color: 'bg-red-500', progress: '75%', status: 'Good condition' },
                            { icon: teeth, label: 'Teeth', color: 'bg-cyan-500', progress: '90%', status: 'Excellent' },
                            { icon: bone, label: 'Bone', color: 'bg-indigo-500', progress: '60%', status: 'Need attention' }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer flex-1"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm shrink-0">
                                            <img
                                                src={item.icon}
                                                alt={`${item.label} icon`}
                                                className="w-8 h-8 sm:w-10 sm:h-10"
                                            />
                                        </div>
                                        <div>
                                            <span className="text-lg sm:text-xl font-semibold text-blue-800 block">{item.label}</span>
                                            <span className="text-xs sm:text-sm text-gray-600">{item.status}</span>
                                            <span className="block text-xs text-gray-500 mt-1">Last check: 26 Oct 2025</span>
                                        </div>
                                    </div>
                                    <span className="text-base sm:text-lg font-bold text-gray-700">{item.progress}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden">
                                    <div
                                        className={`${item.color} h-full rounded-full transition-all duration-500 ease-out`}
                                        style={{ width: item.progress }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Chart - Takes 30% of space */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm flex-[3]">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Activity</h2>
                        <span className="text-xs text-gray-400">3 appointment on this week</span>
                    </div>

                    <div className="h-full pb-2">
                        <div className="h-full flex items-end justify-between">
                            {[
                                {
                                    day: 'Mon',
                                    bars: [
                                        { bottom: 20, height: 20, color: 'bg-cyan-400' },
                                        { bottom: 45, height: 15, color: 'bg-gray-300' }
                                    ]
                                },
                                {
                                    day: 'Tues',
                                    bars: [
                                        { bottom: 15, height: 25, color: 'bg-cyan-400' },
                                        { bottom: 45, height: 20, color: 'bg-indigo-600' },
                                        { bottom: 70, height: 12, color: 'bg-gray-300' }
                                    ]
                                },
                                {
                                    day: 'Wed',
                                    bars: [
                                        { bottom: 15, height: 15, color: 'bg-gray-300' },
                                        { bottom: 35, height: 22, color: 'bg-cyan-400' },
                                        { bottom: 60, height: 15, color: 'bg-indigo-600' }
                                    ]
                                },
                                {
                                    day: 'Thurs',
                                    bars: [
                                        { bottom: 10, height: 15, color: 'bg-gray-300' },
                                        { bottom: 30, height: 25, color: 'bg-cyan-400' },
                                        { bottom: 60, height: 18, color: 'bg-indigo-600' }
                                    ]
                                },
                                {
                                    day: 'Fri',
                                    bars: [
                                        { bottom: 20, height: 30, color: 'bg-cyan-400' },
                                        { bottom: 55, height: 22, color: 'bg-indigo-600' },
                                        { bottom: 80, height: 12, color: 'bg-gray-300' }
                                    ]
                                },
                                {
                                    day: 'Sat',
                                    bars: [
                                        { bottom: 15, height: 12, color: 'bg-gray-300' },
                                        { bottom: 30, height: 18, color: 'bg-cyan-400' },
                                        { bottom: 50, height: 15, color: 'bg-indigo-600' }
                                    ]
                                },
                                {
                                    day: 'Sun',
                                    bars: [
                                        { bottom: 20, height: 22, color: 'bg-cyan-400' },
                                        { bottom: 45, height: 18, color: 'bg-indigo-600' },
                                        { bottom: 65, height: 12, color: 'bg-gray-300' }
                                    ]
                                }
                            ].map((day, dayIndex) => (
                                <div key={dayIndex} className="flex-1 flex flex-col items-center h-full">
                                    <div className="relative flex-1 w-full flex justify-center items-end pb-1">
                                        {day.bars.map((bar, barIndex) => (
                                            <div
                                                key={barIndex}
                                                className={`absolute w-1 sm:w-1.5 ${bar.color} rounded-full`}
                                                style={{
                                                    height: `${bar.height}px`,
                                                    bottom: `${bar.bottom}px`,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)'
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400 font-normal mt-1">{day.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMainContent;