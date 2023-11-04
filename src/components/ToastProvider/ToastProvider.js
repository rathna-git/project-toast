import React from 'react';

export const ToastContext = React.createContext();



function ToastProvider({ children }) {

  const [shelf, setShelf] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'It works!',
      variant: 'notice'
    },
    {
      id: crypto.randomUUID(),
      message: 'watch out',
      variant: 'warning'
    }

  ]);

  React.useEffect(() => {
    function handleKeyDown(event){
      if(event.code === 'Escape'){
        setShelf([]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return() => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    
  },[]);

  const createToast = (message, variant) => {
    const newShelf = {
      message,
      variant,
      id: crypto.randomUUID(),
    };

    setShelf([...shelf, newShelf])
  }

  function handleDelete(id){
    setShelf(shelf.filter((item) => item.id !== id))
  }

  return (
  <ToastContext.Provider value={{ shelf, createToast, handleDelete }}>
    {children}
  </ToastContext.Provider>
  );
}

export default ToastProvider;
