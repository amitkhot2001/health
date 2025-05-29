import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar } from 'lucide-react';

const MedicalCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2021, 9, 26));

  const calendarDays = [
    { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'], selected: '09:00' },
    { day: 'Wed', date: 27, times: ['12:00', '13:00'] },
    { day: 'Thurs', date: 28, times: ['10:00', '11:00'], selected: '11:00' },
    { day: 'Fri', date: 29, times: ['14:00', '16:00'] },
    { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'], selected: '12:00' },
    { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] }
  ];

  const appointments = [
    {
      type: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷',
      color: 'bg-indigo-600'
    },
    {
      type: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '🦴',
      color: 'bg-purple-100 text-gray-700'
    }
  ];

  const upcomingSchedule = {
    thursday: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '✍️' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' }
    ],
    saturday: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '👨‍⚕️' }
    ]
  };

  return (
    <div>
 
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">October 2021</h1>
        <div className="flex gap-2 sm:gap-3">
          <button className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-4">
            <button className="text-indigo-600 hover:bg-gray-100 rounded-lg p-1">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="text-indigo-600 hover:bg-gray-100 rounded-lg p-1">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3 mb-6">
        {calendarDays.map((day, index) => (
          <div key={index} className="text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-1">{day.day}</p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">{day.date}</p>
            <div className="space-y-1">
              {day.times.map((time, timeIndex) => (
                <div
                  key={timeIndex}
                  className={`
                    px-1 sm:px-2 py-1 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer
                    ${day.selected === time 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'bg-purple-100 text-gray-600 hover:bg-purple-200'
                    }
                  `}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {appointments.map((apt, index) => (
          <div
            key={index}
            className={`
              rounded-xl sm:rounded-2xl p-4 sm:p-5 ${apt.color} transition-transform hover:scale-105 cursor-pointer
              ${apt.color.includes('indigo') ? 'text-white' : ''}
            `}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-base sm:text-lg">{apt.type}</h3>
              <span className="text-xl sm:text-2xl">{apt.icon}</span>
            </div>
            <p className="text-xs sm:text-sm mb-1">{apt.time}</p>
            <p className="text-xs sm:text-sm opacity-90">{apt.doctor}</p>
          </div>
        ))}
      </div>

   
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-xs sm:text-sm mb-2">On Thursday</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {upcomingSchedule.thursday.map((item, index) => (
                <div key={index} className="bg-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between hover:bg-purple-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-sm sm:text-base text-gray-800">{item.title}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{item.time}</p>
                  </div>
                  <span className="text-lg sm:text-xl">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs sm:text-sm mb-2">On Saturday</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {upcomingSchedule.saturday.map((item, index) => (
                <div key={index} className="bg-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between hover:bg-purple-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-sm sm:text-base text-gray-800">{item.title}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{item.time}</p>
                  </div>
                  <span className="text-lg sm:text-xl">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCalendar;