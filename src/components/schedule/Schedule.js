import React, { useState } from 'react'
import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'
import './schedule.scss'

const Schedule = ({schedule,changeSchedule}) => {
      return (
        <div className="App">
          <SchedulerCalendar
                  availabilities={schedule}
                  availabilityType={'infinity'}
                  duration={10}
                  is24hour={true}
                  onIntervalChange={(data) => {changeSchedule(data)}}
                />
        </div>
      )
}

export default Schedule
