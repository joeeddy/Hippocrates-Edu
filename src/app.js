import React, { useState, useEffect } from 'react';

const socket = new WebSocket('ws://localhost:8000/chat');

const App = () => {
  const [grid, setGrid] = useState([]);
  const [question, setQuestion] = useState('');
  const [feedback, setFeedback] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    socket.onopen = () => {
      socket.send(JSON.stringify({ answer: '' }));
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setQuestion(data.question);
      setFeedback(data.feedback);
      setGrid(data.grid);
    };
    return () => socket.close();
  }, []);

  const sendAnswer = () => {
    socket.send(JSON.stringify({ answer }));
    setAnswer('');
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Hippocrates-Edu: Socratic Learning</h1>
      <div style={{ display: 'inline-block' }}>
        {grid.map((row, i) => (
          <div key={i} style={{ display: 'flex' }}>
            {row.map((state, j) => (
              <div key={j} style={{
                width: '40px', height: '40px',
                background: `rgb(${state * 255}, 0, ${255 - state * 255})`,
                border: '1px solid black', textAlign: 'center', color: 'white'
              }}>
                {state.toFixed(2)}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ margin: '20px' }}>
        <p><strong>Question:</strong> {question}</p>
        <p><strong>Feedback:</strong> {feedback}</p>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={sendAnswer}>Send</button>
      </div>
    </div>
  );
};

export default App;
