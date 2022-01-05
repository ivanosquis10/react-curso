import React, { useState, useEffect } from 'react';
// Es el componente que se va a renderizar a final de cuenta
function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    // window.addEventListener('storage', (change) => {
    //   if (change.key === 'TDODOS_V1') {
    //     console.log('HUBO CAMBIOS EN TODOS_V1');
    //     setStorageChange(true);
    //   }
    // });

    useEffect(() => {
      const onChange = (change) => {
        if (change.key === 'TODOS_V1') {
          console.log('Hubo cambios en TODOS_V1');
          setStorageChange(true);
        }
      };

      window.addEventListener('storage', onChange);

      return () => {
        window.removeEventListener('storage', onChange);
      };
    }, []);

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
