import React, { useState, useEffect } from 'react'
import { FaPlay, FaPause, FaHistory, FaMugHot } from 'react-icons/fa'

import audioFile from '../components/audios/ALARME - UEPA.mp3' //AUDIO ALARME

function Pomodoro() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isBreakActive, setIsBreakActive] = useState(false)
  const [playAudio, setPlayAudio] = useState(false) 

  useEffect(() => { //FUNÇÕES CONTROLADORAS DO TEMPORIZADOR
    let interval

    if (isActive && !isBreakActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          clearInterval(interval)
          setIsActive(false)
          setPlayAudio(true) 
        }
      }, 1000)
    } else if (isBreakActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          clearInterval(interval)
          setIsBreakActive(false)
          setPlayAudio(true) 
        }
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isActive, isBreakActive, minutes, seconds])

  useEffect(() => { //TOCAR AUDIO
    if (playAudio) {
      const audio = new Audio(audioFile)
      audio.play()

    }
  }, [playAudio])

  const toggleTimer = () => {
    if (!isBreakActive) {
      setIsActive(!isActive)
    }
  }

  const startBreak = () => {
    setIsActive(false)
    setMinutes(5) // ALTERAR INTERVALO
    setSeconds(0)
    setIsBreakActive(true)
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsBreakActive(false)
    setMinutes(25)
    setSeconds(0)
  }

  return ( //CÓDIGO DA INTERFACE DO TEMPORIZADOR
    <div className="pomodoro">
      <h2 className="title">Pomodoro Timer</h2>
      <div className="timer">
        <p> 
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </p>
      </div> 
      <div className="controls">
        <button className="pomodoro-button" onClick={toggleTimer}> 
          {isActive ? <FaPause /> : <FaPlay />}
        </button>
        <button className="pomodoro-button" onClick={startBreak}>
          <FaMugHot />
        </button>
        <button className="pomodoro-button" onClick={resetTimer}>
          <FaHistory />
        </button>
      </div>
    </div>
  )
}

export default Pomodoro
