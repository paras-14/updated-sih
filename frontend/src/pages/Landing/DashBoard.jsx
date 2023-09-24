import React from 'react';
import './Dashboard.scss';
const DashboardPage = () => {
  const pastPerformance = ['Performance 1', 'Performance 2', 'Performance 3'];
  const upcomingSchedule = ['Schedule 1', 'Schedule 2', 'Schedule 3'];
  const assignments = ['Assignment 1', 'Assignment 2', 'Assignment 3'];

  return (
    <div className="dashboard">
      <h2>Past Performance</h2>
      <ul>
        {pastPerformance.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Upcoming Schedule</h2>
      <ul>
        {upcomingSchedule.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Assignments</h2>
      <ul>
        {assignments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;
