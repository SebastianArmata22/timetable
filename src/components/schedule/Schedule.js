import React, { useState } from 'react'
import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'
import './schedule.scss'
const Schedule = () => {
    const [availabilities, setAvailabilities]=useState([
        {
          day: "mon",
          slots: [
            {from: '09:00', to: '10:30'},
            {from: '11:30', to: '13:00'},
            {from: '14:30', to: '17:00'},
          ]
        },
        {
          day: "2021-07-03",
          slots: [
            {from: '09:00', to: '10:30'},
            {from: '11:30', to: '19:00'},
          ]
        }
      ])
      return (
        <div className="App">
          <SchedulerCalendar
                  availabilities={availabilities}
                  availabilityType={'infinity'}
                  duration={10}
                  onIntervalChange={() => {}}
                />
        </div>
      )
}

export default Schedule
