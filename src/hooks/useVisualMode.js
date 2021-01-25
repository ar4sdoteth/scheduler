import React, { useState } from 'react';


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(nextMode, replace = false) {
    setMode(prev => nextMode)
    replace ? 
      setHistory(prev => [...prev.slice(0, prev.length - 1), nextMode]) : 
      setHistory(prev => [...prev, nextMode])
  }

  const back = function(){
    if (history.length > 1) {
      setMode(prev => [...history.slice(0, history.length - 1).slice(-1)][0])
      setHistory(prev => [...prev.slice(0, history.length - 1)])
    }
  }

  return { mode, transition, back }
}