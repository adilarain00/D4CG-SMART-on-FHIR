import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import CaseStudyPage from './pages/CaseStudyPage';
import EmptyState from './components/EmptyState';

function App() {
  const [activePatientId, setActivePatientId] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = (id) => {
    if (typeof id === 'object' || !id) {
      setIsConnected(false);
      setActivePatientId('');
      return;
    }
    if (id && id.trim()) {
      setIsConnected(true);
      setActivePatientId(id.trim());
    }
  };

  return (
    <Router>
      <Layout isConnected={isConnected} onConnect={() => handleConnect(null)}>
        <Routes>
          <Route
            path='/'
            element={
              !isConnected || !activePatientId ? (
                <EmptyState onConnect={handleConnect} />
              ) : (
                <DashboardPage
                  activePatientId={activePatientId}
                  onDisconnect={() => handleConnect(null)}
                />
              )
            }
          />
          <Route path='/case-study' element={<CaseStudyPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
