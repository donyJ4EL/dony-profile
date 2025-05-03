import { useEffect } from 'react';
import useLocalStorage from './UseLocalStorage';
import useStorageListener from './UseStorageListener';

function useUserPreferences() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [fontSize, setFontSize] = useLocalStorage('fontSize', 'medium');

    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        document.body.setAttribute('data-font-size', fontSize);
    }, [fontSize]);

    useStorageListener('theme', setTheme);
    useStorageListener('fontSize', setFontSize);

    const setPreference = (key, value) => {
        switch (key) {
          case 'theme':
            setTheme(value);
            break;
          case 'fontSize':
            setFontSize(value);
            break;
          default:
            console.warn(`Unknown preference key: ${key}`);
        }
    };

    return {
        preferences: {
          theme,
          fontSize,
        },
        setPreference,
    };


}


export default useUserPreferences;