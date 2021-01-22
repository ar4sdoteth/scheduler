import React, { useState, useEffect } from "react";
import DayList from './DayList'
import "components/Application.scss";
import Appointment from "components/Appointment/"
import axios from 'axios';


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Ashley Barr",
      interviewer: {
        id: 1,
        name: "Tori Malcolm",
        avatar: "https://i.imgur.com/Nmx0Qxo.png",
      }
    }
  },
  {
    id: 4,
    time: "4pm",
    interview: {
      student: "Dalai Lama",
      interviewer: {
        id: 1,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "6pm",
    interview: {
      student: "Mahatma Gandhi",
      interviewer: {
        id: 1,
        name: "Sven Jones",
        avatar: "https://i.imgur.com/twYrpay.jpg",
      }
    }
  }
];

export default function Application(props) {

  const [days, setDays] = useState([])

  useEffect(() => {
    axios
      .get('/api/days')
      .then(response => setDays(response.data))
      // .then(response => console.log(response.data))

  }, [])

  return (
    <main className="layout">
      <section className="sidebar">
        
          <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />
          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu">
          <DayList
            days={days}
            day={props.day}
            setDay={props.setDay}
          />
          </nav>
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          />
          
      </section>
      <section className="schedule">
        {appointments.map((appointment) => {
            return <Appointment key={appointment.id} {...appointment} />;
          })}
      <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}