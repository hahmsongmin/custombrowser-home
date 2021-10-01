import React from "react";
import styles from "./school.module.css";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import Lunch from "./lunch";
import Schedule from "./schedule";

let calendar = new Calendar("", {
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  },
});

const School = ({ lunch, day, yoil }) => {
  return (
    <div className={styles.school}>
      <Schedule />
      calendar.render();
      <Lunch lunch={lunch} day={day} yoil={yoil} />
    </div>
  );
};

export default School;
