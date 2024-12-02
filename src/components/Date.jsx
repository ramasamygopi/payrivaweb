import React from 'react';

const CurrentDate = () => {
  const today = new Date();
  const date = today.getDate();
  const year = today.getFullYear();

  // Array of month names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const month = months[today.getMonth()]; // Get the month name

  return (
    <div>
      <p>
        {month} {date} {year}
      </p>
    </div>
  );
};

export default CurrentDate;
