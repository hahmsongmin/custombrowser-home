import React, { useEffect, useRef, useState } from "react";
import styles from "./school.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Lunch from "./lunch";
import Loader from "../loader/loader";

const School = ({ lunch, day, yoil, schedule, isLoading }) => {
  const calendarRef = useRef();
  const [saveSchedule, setSaveSchedule] = useState();
  useEffect(() => {
    setSaveSchedule(schedule);
  }, [saveSchedule]);

  const handleDateClick = () => {
    const calendarApi = calendarRef.current.getApi();
    // alert("Hello🙋‍♂️");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.school}>
          <div className={styles.calendar}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              initialView="dayGridMonth"
              eventContent={renderEventContent}
              events={saveSchedule}
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
