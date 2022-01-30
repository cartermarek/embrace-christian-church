import React from "react";
// import { Calendar } from "@fullcalendar/core";
// import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin
import "../css/Events.css";

function Events() {
	// let calendar = new Calendar(calendarEl, {
	// 	plugins: [googleCalendarPlugin],
	// 	googleCalendarApiKey: "AIzaSyD0avM5fIvIkpwWvSdyUqVfiijpKJJhWCc",
	// 	events: {
	// 		googleCalendarId: "cartermarek@gmail.com",
	// 	},
	// });

	return (
		<div className="eventContainer">
			<div className="eventCalendar">
				<FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
			</div>
			<div className="eventInfo">
				<div className="word">
					<h3>Genesis 1:1</h3>
					<h4>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
						dolorum temporibus quae deserunt nulla exercitationem sint, ipsa
						magni eligendi qui laudantium possimus rerum officia. Quia error
						consequatur facilis est quis.
					</h4>
				</div>
				<div className="pastEvent">
					<p>photo album</p>
				</div>
			</div>
		</div>
	);
}

export default Events;
