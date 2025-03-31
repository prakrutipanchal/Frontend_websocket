import { useEffect } from 'react';
import { io } from 'socket.io-client';

function App() {
  useEffect(() => {
    const socket = io('http://localhost:3001'); // Replace with your backend URL after deployment

    socket.on('welcome', (msg) => {
      console.log('Server says:', msg); // Check browser console
    });

    return () => socket.disconnect();
  }, []);

  return <h1>Socket.io Test (Check browser console!)</h1>;
}

export default App;