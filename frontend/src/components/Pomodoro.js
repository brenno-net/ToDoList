import React, { useState, useEffect } from 'react';


// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [isBreakActive, setIsBreakActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && !isBreakActive) {
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
    } else if (isBreakActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
          setIsBreakActive(false);
          // Você pode adicionar uma notificação de fim do intervalo aqui
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isBreakActive, minutes, seconds]);

  const toggleTimer = () => {
    if (!isBreakActive) {
      setIsActive(!isActive);
    }
  };

  const startBreak = () => {
    setIsActive(false);
    setMinutes(5); // Altere para a duração do intervalo desejada (5 minutos)
    setSeconds(0);
    setIsBreakActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreakActive(false);
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
        <button className="button" onClick={toggleTimer}>
        <FontAwesomeIcon icon="fa-solid fa-play" />
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={startBreak}>
          Start Break
        </button>
        <button className="button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
