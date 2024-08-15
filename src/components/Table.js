import React from "react";
import "./TableStyles.css";

const ScheduleTable = () => {
  const scheduleData = [
    {
      day: "Tuesday",
      topic: "Tuesday Meeting",
      time: "8:00PM",
      meetingType: "Online",
      contact: "email@email.com",
    },
    {
      day: "Thursday",
      topic: "Thursday Meeting",
      time: "5:30PM",
      meetingType: "Physical - Abuja",
      contact: "email@email.com",
    },
    {
      day: "Thursday",
      topic: "Online Meeting for Women",
      time: "7:00PM",
      meetingType: "Online",
      contact: "email@email.com",
    },
    {
      day: "Thursday",
      topic: "Online Meeting for Men",
      time: "8:00PM",
      meetingType: "Online",
      contact: "email@email.com",
    },
    {
      day: "Saturday",
      topic: "Saturday Meeting",
      time: "8:00PM",
      meetingType: "Online",
      contact: "email@email.com",
    },
    {
      day: "Sunday",
      topic: "Sunday Meeting",
      time: "11:00AM",
      meetingType: "Online",
      contact: "email@email.com",
    },
  ];

  return (
    <div className="table-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day of the Week</th>
            <th>Topic</th>
            <th>Time (West Central Africa)</th>
            <th>Meeting Type</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.day}</td>
              <td>{schedule.topic}</td>
              <td>{schedule.time}</td>
              <td>{schedule.meetingType}</td>
              <td>{schedule.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
