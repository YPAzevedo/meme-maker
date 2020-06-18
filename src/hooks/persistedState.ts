import { useState, useEffect } from "react";

export default function usePersistedState(key: string, initialState: any) {
  const stateFromStorage = localStorage.getItem(key);
  const storedInitialState = stateFromStorage && JSON.parse(stateFromStorage);
  const [state, setState] = useState(storedInitialState || initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
