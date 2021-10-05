import React from "react";
import styles from "./school.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Loader from "../loader/loader";

const School = ({ schedule, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.calendar}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            height="500px"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={false}
            initialView="dayGridMonth"
            eventContent={renderEventContent}
            select={handleDateSelect}
            events={schedule}
          />
        </div>
      )}
    </>
  );
};

function handleDateSelect(eventInfo) {
  const title = prompt("일정을 입력해주세요");
  const calendarApi = eventInfo.view.calendar;
  if (title) {
    calendarApi.addEvent({
      title,
      start: eventInfo.startStr,
      end: eventInfo.endStr,
      allDay: eventInfo.allDay,
      color: "red",
    });
  }
}

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
