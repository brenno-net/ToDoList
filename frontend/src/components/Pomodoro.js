import React, { useState, useEffect } from 'react';

// Importe o áudio que você deseja reproduzir
import audioFile from '../components/audios/beep-beep-6151.mp3';

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [playAudio, setPlayAudio] = useState(false); // Adicione o estado playAudio

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
          setPlayAudio(true); // Iniciar a reprodução do áudio quando o temporizador terminar
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
          setPlayAudio(true); // Iniciar a reprodução do áudio quando o temporizador de intervalo terminar
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isBreakActive, minutes, seconds]);

  // Adicione um novo useEffect para controlar a reprodução do áudio
  useEffect(() => {
    if (playAudio) {
      const audio = new Audio(audioFile);
      audio.play();
      audio.play();
    }
  }, [playAudio]);

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
      <h2 className="title">Pomodoro Timer</h2>
      <div className="timer">
        <p>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </p>
      </div>
      <div className="controls">
        <button className="button" onClick={toggleTimer}>
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
