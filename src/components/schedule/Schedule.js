import moment from 'moment'
import React, { useState } from 'react'
import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'
import './schedule.scss'
const Schedule = () => {
    const [availabilities, setAvailabilities]=useState([])
      return (
        <div className="App">
          <SchedulerCalendar
                  availabilities={availabilities}
                  availabilityType={'infinity'}
                  availabilityStartDate={moment({ y: 2017, M: 0, d: 4, h: 15, m: 10, s: 3, ms: 123})}
                  duration={100}
                  is24hour={true}
                  onIntervalChange={(data) => {setAvailabilities(data)
                  console.log(data)}}
                />
        </div>
      )
}

export default Schedule
