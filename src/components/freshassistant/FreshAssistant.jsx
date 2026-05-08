import React from 'react';
import FreshAssistant from './components/FreshAssistant';

// SaaS Style Object
const styles = {
  appContainer: {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center',
  }
};

function App() {
  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={{ color: '#00ff88', margin: 0 }}>FreshAI</h1>
        <p style={{ opacity: 0.6 }}>Pure Air Architecture</p>
      </header>
      
      <main>
        {/* Pass your logic state here */}
        <FreshAssistant isWritingEnabled={true} />
      </main>
    </div>
  );
}

export default App;
