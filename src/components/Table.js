import React from "react";
import "./TableStyles.css";

const ScheduleTable = () => {
  const scheduleData = [
    {
      day: "Tuesday",
      topic: "Tuesday Meeting",
      time: "20:00 West Central Africa",
      meetingType: "Online",
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
      meetingType: "Online",
    },
    {
      day: "Sunday",
      topic: "Sunday Meeting",
      time: "11:00 West Central Africa",
      meetingType: "Online",
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
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.day}</td>
              <td>{schedule.topic}</td>
              <td>{schedule.time}</td>
              <td>{schedule.meetingType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
