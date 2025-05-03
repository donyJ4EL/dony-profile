import { useEffect } from "react";

function useStorageListener(key, callback) {
    useEffect(() => {
      const handleStorage = (e) => {
        if (e.key === key) {
          const newValue = e.newValue ? JSON.parse(e.newValue) : null;
          callback(newValue);
        }
      };
      window.addEventListener('storage', handleStorage);
      return () => window.removeEventListener('storage', handleStorage);
    }, [key, callback]);
  }
  
  export default useStorageListener;