import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

const body = document.querySelector("body");

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('key')
  useEffect(e => {
    console.log('toggled!')
    if (darkMode === true) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }
  }, [setDarkMode])

  return [darkMode, setDarkMode];
}