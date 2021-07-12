import React from 'react'
import NavBar from '../NavBar/NavBar'
import Counter from '../counter/Counter'
import Schedule from '../schedule/Schedule'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, database } from '../../firebase/config';
import { MdUnfoldMore, MdUnfoldLess } from "react-icons/md"
import "./account.scss";

const EmployeeAccount = () => {
    const { uid } = auth.currentUser
    const queryToBase = database.collection("users").doc(uid).collection('schedules')
    const [schedules] = useCollectionData(queryToBase)
    const [stackedSchedules, setStackedSchedules] = React.useState([])
    const [isStackedVisible, setIsStackedVisible] = React.useState(true);
    const [isStacked, setIsStacked] = React.useState(false);

    const changeSchedule=async (schedule)=>{
        await database.collection("users").doc(uid).collection('schedules').where("day", "==", schedule[0].day)
        .get()
            .then((querySnapshot) => {
                querySnapshot.size===0 &&  database.collection('users').doc(uid).collection('schedules').add(schedule[0])
                querySnapshot.forEach((doc) => {
                    database.collection('users').doc(uid).collection('schedules').doc(doc.id).update(schedule[0])
            });
        })
    }
    
    const timeDiffMinutes = (start, end) => {
        const [startHours, startMinutes] = start.split(":");
        const [endHours, endMinutes] = end.split(":");

        return (Number(endHours) - Number(startHours)) * 60 + (Number(endMinutes) - Number(startMinutes))
    }

    const timeDiffString = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time - hours * 60;
        return `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`
    }

    const getStackedSchedules = () => {
        return schedules.map((schedule) => {
            let minutes = 0;
            console.log(schedule.slots)
            schedule.slots.forEach((slot) => {
                minutes += timeDiffMinutes(slot.from, slot.to);
            })
            return {
                day: schedule.day,
                slots: [
                    {
                        from: timeDiffString(minutes),
                        to: "  ",
                    }
                ]
            }
        })
    }

    React.useEffect(() => {
        if (schedules) setStackedSchedules(getStackedSchedules(schedules));
    }, [schedules]);

    const clickHandler = (e) => {
        setIsStackedVisible(false);
        if (document.getElementsByClassName("_1Qth3")[0].offsetLeft < e.pageX 
         && e.pageX < document.getElementsByClassName("_1Qth3")[0].offsetLeft + document.getElementsByClassName("_1Qth3")[0].clientWidth
         && document.getElementsByClassName("_1Qth3")[0].offsetTop < e.pageY
         && e.pageY < document.getElementsByClassName("_1Qth3")[0].offsetTop + document.getElementsByClassName("_1Qth3")[0].clientHeight) { 
            document.getElementsByClassName("_2mN2R")[0].click()
            document.getElementsByClassName("_2mN2R")[1].click()
        }
        else if (document.getElementsByClassName("_33fyd")[0].offsetLeft < e.pageX 
        && e.pageX < document.getElementsByClassName("_33fyd")[0].offsetLeft + document.getElementsByClassName("_33fyd")[0].clientWidth
        && document.getElementsByClassName("_33fyd")[0].offsetTop < e.pageY
        && e.pageY < document.getElementsByClassName("_33fyd")[0].offsetTop + document.getElementsByClassName("_33fyd")[0].clientHeight)   { 
            document.getElementsByClassName("_33fyd")[0].click()
            document.getElementsByClassName("_33fyd")[1].click()
        }
        else if (document.getElementsByClassName("_2hEh2").length > 1
        && document.getElementsByClassName("_2hEh2")[0].offsetLeft + document.getElementsByClassName("_1Qth3")[0].offsetLeft < e.pageX 
        && e.pageX < document.getElementsByClassName("_2hEh2")[0].offsetLeft + document.getElementsByClassName("_1Qth3")[0].offsetLeft + document.getElementsByClassName("_2hEh2")[0].clientWidth
        && document.getElementsByClassName("_2hEh2")[0].offsetTop + document.getElementsByClassName("_1Qth3")[0].offsetTop < e.pageY
        && e.pageY < document.getElementsByClassName("_2hEh2")[0].offsetTop + document.getElementsByClassName("_1Qth3")[0].offsetTop + document.getElementsByClassName("_2hEh2")[0].clientHeight)   { 
            document.getElementsByClassName("_TM6U3")[0].click()
            document.getElementsByClassName("_TM6U3")[1].click()
        }
        setTimeout(setIsStackedVisible(true), 0);
    }

    return (
        <div className="employeeAcount-container">
            <NavBar />
            <Counter />
            <button className="employeeAcount-btn" onClick={() => {setIsStacked(!isStacked)}}>{isStacked ? <MdUnfoldMore /> : <MdUnfoldLess />}</button>
            {
                isStacked ? <div style={{ display: "grid" }}>
                <div style={{ gridColumn: 1, gridRow: 1, opacity: 1, }} onClick={clickHandler} >
                    <Schedule schedule={schedules? schedules:[]} changeSchedule={changeSchedule} dayContainerStyle="transparentSchedule-dayContainer" topHeaderContainerStyle={isStackedVisible ? "transparentSchedule-topHeader_visible" : "transparentSchedule-topHeader_hidden"} />
                </div>
                <div style={{ gridColumn: 1, gridRow: 1, zIndex: 0}} >
                    <Schedule schedule={stackedSchedules? stackedSchedules:[]} changeSchedule={changeSchedule} dayContainerStyle="emptySchedule-dayContainer" topHeaderContainerStyle="visibleSchedule-topHeader" />
                </div>
            </div> : <div>
                    <Schedule schedule={schedules? schedules:[]} changeSchedule={changeSchedule}/>
                </div>
            }
            

        </div>
    )
}

export default EmployeeAccount
