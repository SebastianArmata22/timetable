import moment from 'moment'
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
                  initialRenderOfRow={100}
                  availabilities={availabilities}
                  availabilityType={'range'}
                  availabilityEndDate={moment()}
                  availabilityStartDate={moment("01/06/2021").format('DD/MM/YYYY')}
                  duration={10}
                  is24hour={true}
                  onIntervalChange={(data) => {setAvailabilities(data)
                  console.log(data)}}
                />
        </div>
      )
}

export default Schedule
