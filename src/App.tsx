import React from 'react';
import logo from './logo.svg';
import './App.scss';
import StatusPage from './status_report/StatusPage';

function App() {
  return (
    <div className="app">
      <StatusPage projectId={1}></StatusPage>
    </div>
  );
}

export default App;
