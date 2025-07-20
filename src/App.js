import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

// Replace with your Codespaces URL (see Ports tab)
const CODESPACE_URL = 'https://<your-codespaces-url>.githubpreview.dev';

function App() {
  useEffect(() => {
    const socket = io(CODESPACE_URL);

    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('grid_update', (data) => {
      console.log('Received grid update:', data);
      // Handle data here
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Hippocrates Edu</h1>
      {/* Your UI components */}
    </div>
  );
}

export default App;
