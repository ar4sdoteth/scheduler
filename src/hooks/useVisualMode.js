import { useState } from 'react';


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(mode, replace = false) {
    setMode(prev => mode)
    replace ? 
      setHistory(prev => [...prev.slice(0, prev.length - 1), mode]) : 
      setHistory(prev => [...prev, mode])
  }

  const back = function() {
    if (history.length > 1) {
      setMode(prev => [...history.slice(0, history.length - 1).slice(-1)][0])
      setHistory(prev => [...prev.slice(0, history.length - 1)])
    }
  }
  // console.log(history)
  return { mode, history, back, transition}
}