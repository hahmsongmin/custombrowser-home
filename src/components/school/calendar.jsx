import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default class DemoApp extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.event.title}</b>
        {eventInfo.event.extendedProps.timeText && (
          <p>{`${eventInfo.event.extendedProps.timeText}`}</p>
        )}
      </>
    );
  }

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-main">
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
            weekends={this.state.weekendsVisible}
            select={this.handleDateSelect}
            eventContent={this.renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    );
  }
}

{
  /* <div className={styles.calendar}>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              eventContent={renderEventContent}
              height="600px"
              weekends={false}
              events={saveSchedule}
              className={`${styles.myCalendar}`}
              selectable={true}
              dateClick={handleDateClick}
            />
          </div> */
}
