import React, { useState, useEffect } from 'react';

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
          setIsActive(false);
          // Você pode adicionar uma notificação aqui quando o tempo acabar
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="pomodoro">
      <h2>Pomodoro Timer</h2>
      <div className="timer">
        <p>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </p>
      </div>
      <div className="controls">
        <button className="button" onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button className="button" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Pomodoro;
