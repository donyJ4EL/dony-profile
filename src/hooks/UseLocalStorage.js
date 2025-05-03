import { useState } from "react";


function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(
        () => {
            try {
                if (typeof window === 'undefined') {
                    return initialValue;
                }
    
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (err) {
                console.log(`useLocalStorage read failed, ${err}`);
                return initialValue;
            }
        }
    );

    const setStoredValue = (newValue) => {
        try {
            const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
            setValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (err) {
            console.log(`setStoredValue failed, ${err}`);
        }
    };
    console.log(`setStoredValue, value = ${value}`);
    return [value, setStoredValue];
}


export default useLocalStorage;