import React, { useState } from 'react'
import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'
import './schedule.scss'

const Schedule = () => {
    const [availabilities, setAvailabilities]=useState([
      {
        day: "2021-01-26",
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
                  is24hour={true}
                  onIntervalChange={(data) => {setAvailabilities(data)}}
                />
        </div>
      )
}

export default Schedule
