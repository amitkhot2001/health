import Dropdown from './Dropdown';
import humanbody from '../assets/human-body.png';
import lung from '../assets/lung.png';
import teeth from '../assets/teeth.png';
import bone from '../assets/bone.png';

const DashboardMainContent = () => {
    return (
        <div className="flex-1 w-full flex flex-col p-4 box-border overflow-hidden">
        
            <div className="flex justify-between items-center text-2xl mb-2 shrink-0 h-16">
                <div className="text-blue-800">Dashboard</div>
                <Dropdown />
            </div>

            
            <div className="flex flex-col grow gap-4 overflow-hidden">
              
                <div className="flex flex-col md:flex-row gap-4 h-1/2">
                  
                    <div className="w-full md:w-1/2 bg-blue-50 rounded-3xl flex items-center justify-center md:p-4 p-2">
                        <img
                            src={humanbody}
                            alt="Human body diagram"
                            className="w-full h-auto max-w-[50vh] object-contain"
                        />
                    </div>

                
                    <div className="w-full h-[5vh] md:w-1/2 flex flex-col gap-3 p-2">
                        {[
                            { icon: lung, label: 'Lung', color: 'bg-red-500' },
                            { icon: teeth, label: 'Teeth', color: 'bg-cyan-500' },
                            { icon: bone, label: 'Bone', color: 'bg-cyan-500' }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-blue-50 rounded-2xl flex flex-col items-center p-2 shadow"
                            >
                                <div className="flex items-center mb-1">
                                    <img
                                        src={item.icon}
                                        alt={`${item.label} icon`}
                                        className="w-8 h-8"
                                    />
                                    <span className="ml-2 text-base text-blue-800">{item.label}</span>
                                </div>
                                <span className="text-xs text-gray-400 mb-1">Date: 26 Oct 2025</span>
                                <div className="w-3/4 bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`${item.color} h-2 rounded-full`}
                                        style={{ width: '25%' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="bg-gray-200 rounded-xl p-4 md:p-2 shadow-md w-full h-40">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-semibold text-blue-900">Activity</span>
                        <span className="text-sm text-gray-400">3 appointments this week</span>
                    </div>
                    <div className="flex justify-between items-end gap-2 pt-2 h-full">
                        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className="flex flex-col justify-end gap-1 h-20">
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
        </div>
    );
};

export default DashboardMainContent;
