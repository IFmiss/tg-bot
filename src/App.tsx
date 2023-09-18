import './App.css';
import React, { useEffect } from 'react';

Telegram.WebApp.ready();

function App() {
  useEffect(() => {
    Telegram.WebApp.MainButton.color = '#57ca3a';
    Telegram.WebApp.MainButton.textColor = '#0d1e08';
    Telegram.WebApp.MainButton.text = 'Continue';
    Telegram.WebApp.MainButton.isVisible = true;
    Telegram.WebApp.MainButton.onClick(() => {
      Telegram.WebApp.showConfirm('Are you confirm', () => {
        Telegram.WebApp.close()
      })
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
