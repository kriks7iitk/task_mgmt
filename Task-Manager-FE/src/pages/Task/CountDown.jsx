import React, { useState, useEffect } from 'react';

const Countdown = ({ dueTime }) => {
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const dueDate = new Date(dueTime);

      if (isNaN(dueDate.getTime())) {
        setRemainingTime('Invalid date');
        return;
      }

      const totalMilliseconds = dueDate - now;
      if (totalMilliseconds <= 0) {
        setRemainingTime('Time is up!');
        return;
      }

      const totalSeconds = Math.floor(totalMilliseconds / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalWeeks = Math.floor(totalDays / 7);
      const totalMonths = Math.floor(totalDays / 30);

      let formattedTime = '';

      if (totalMonths >= 1) {
        formattedTime = `${totalMonths} month${totalMonths > 1 ? 's' : ''}`;
      } else if (totalWeeks >= 1) {
        formattedTime = `${totalWeeks} week${totalWeeks > 1 ? 's' : ''}`;
      } else if (totalDays >= 1) {
        formattedTime = `${totalDays} day${totalDays > 1 ? 's' : ''}`;
      } else if (totalHours >= 1) {
        formattedTime = `${totalHours} hour${totalHours > 1 ? 's' : ''}`;
      } else if (totalMinutes >= 1) {
        formattedTime = `${totalMinutes} minute${totalMinutes > 1 ? 's' : ''}`;
      } else {
        formattedTime = `${totalSeconds} second${totalSeconds > 1 ? 's' : ''}`;
      }

      setRemainingTime(formattedTime);
    };

    // Update the countdown every second
    const intervalId = setInterval(calculateRemainingTime, 1000);

    // Initial call
    calculateRemainingTime();

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [dueTime]);

  return <span>{remainingTime}</span>;
};

export default Countdown;
