import React, { useEffect } from "react";
import styles from "./school.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Lunch from "./lunch";
import Loader from "../loader/loader";

const School = ({ lunch, day, yoil, schedule, isLoading }) => {
  console.log(schedule, "✔");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.school}>
          <div className={styles.calendar}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              eventContent={renderEventContent}
              height="600px"
              weekends={false}
              events={schedule}
              backgroundColor="red"
            />
          </div>
          <Lunch lunch={lunch} day={day} yoil={yoil} />
        </div>
      )}
    </>
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <b className={styles.title}>{eventInfo.event.title}</b>
      {eventInfo.event.extendedProps.timeText && (
        <p className={styles.description}>
          {`${eventInfo.event.extendedProps.timeText}`}
        </p>
      )}
    </>
  );
}

export default School;
