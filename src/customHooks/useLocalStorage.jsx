import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = useState(true);

  // Estados de carga y de error
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // Si no existe nada en localStorageItem
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  // Puente que va a funcionar para manejar los datos en la app y localStorage
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);

      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };
