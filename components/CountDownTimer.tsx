import React, { useState, useEffect } from "react";

const CountDownTimer = ({
  endDate,
  className,
  activeStyle,
  endedStyle,
}: {
  endDate: string;
  className?: string;
  activeStyle?: React.CSSProperties;
  endedStyle?: React.CSSProperties;
}) => {
  const [timeLeft, setTimeLeft] = useState(timeDiffFromNow(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeDiffFromNow(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className={`mb-1 flex items-center justify-center gap-2 ${className}`}>
      {timeLeft.days !== 0 &&
      timeLeft.hours !== 0 &&
      timeLeft.minutes !== 0 &&
      timeLeft.seconds !== 0 ? (
        <>
          <div style={activeStyle}>{timeLeft.days} Days</div>
          <div
            style={activeStyle}
          >{`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds} Left`}</div>
        </>
      ) : (
        <>
          <div style={endedStyle}>Ended!!!</div>
        </>
      )}
    </div>
  );
};
function timeDiffFromNow(futureDateStr: string) {
  const futureDate = new Date(futureDateStr);
  const now = new Date();
  const diffInMillis = +futureDate - +now;
  if (diffInMillis < 0 || isNaN(diffInMillis)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((diffInMillis / 1000) % 60);
  const minutes = Math.floor((diffInMillis / 1000 / 60) % 60);
  const hours = Math.floor((diffInMillis / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

export default CountDownTimer;
