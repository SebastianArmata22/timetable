import moment from 'moment';
import React from 'react'
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
const Schedule = () => {
    let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week);
    return (
    <Scheduler schedulerData={schedulerData}/>
    )
}

export default Schedule
