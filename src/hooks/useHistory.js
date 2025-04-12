import { useState, useCallback } from 'react';
export default function useHistory(initialState) {
  const [history, setHistory] = useState([initialState]);
  const [index, setIndex] = useState(0);
  const pushState = (state) => {
    const newHistory = [...history.slice(0, index + 1), state];
    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  };
  const undo = () => index > 0 && setIndex(index - 1);
  const redo = () => index < history.length - 1 && setIndex(index + 1);
  return {
    state: history[index],
    pushState,
    undo,
    redo,
    canUndo: index > 0,
    canRedo: index < history.length - 1
  };
}