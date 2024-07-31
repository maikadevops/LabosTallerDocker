import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Aplicación de Ejemplo</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
