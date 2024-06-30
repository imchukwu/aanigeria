import React from "react";
import "./TableStyles.css";

const ScheduleTable = () => {
  const scheduleData = [
    {
      day: "Tuesday",
      topic: "Tuesday Meeting",
      time: "20:00 West Central Africa",
      meetingType: "Virtual",
      meetingLink:
        "https://zoom.us/j/91751144134?pwd=NFA3dDRGY2FYdlE0bkdNRXQ2MHNNdz09",
      meetingID: "917 5114 4134",
      passcode: "tuesday",
    },
    {
      day: "Thursday",
      topic: "Thursday Meeting",
      time: "20:00 West Central Africa",
      meetingType: "Physical",
    },
    {
      day: "Saturday",
      topic: "Steps and Traditions",
      time: "20:00 West Central Africa",
      meetingType: "Virtual",
      meetingLink:
        "https://zoom.us/j/97199164571?pwd=WGxTQWxOQm9CTWdPbnhmaG9Xb1VtZz09",
      meetingID: "971 9916 4571",
      passcode: "steps",
    },
    {
      day: "Sunday",
      topic: "Sunday Meeting",
      time: "11:00 West Central Africa",
      meetingType: "Virtual",
      meetingLink:
        "https://zoom.us/j/95146115523?pwd=VVo4V1BpZHI1elpIZm45WFZIY09adz09",
      meetingID: "951 4611 5523",
      passcode: "sunday",
    },
  ];

  return (
    <div className="table-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day of the Week</th>
            <th>Topic</th>
            <th>Time</th>
            <th>Meeting Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.day}</td>
              <td>{schedule.topic}</td>
              <td>{schedule.time}</td>
              <td>{schedule.meetingType}</td>
              <td>
                {schedule.meetingType === "Virtual" ? (
                  <div>
                    <p>
                      Link:{" "}
                      <a href={schedule.meetingLink} className="link">
                        {schedule.meetingLink}
                      </a>
                    </p>
                    <p>ID: {schedule.meetingID}</p>
                    <p>Passcode: {schedule.passcode}</p>
                  </div>
                ) : (
                  <p>Physical Meeting</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
