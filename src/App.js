import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import UserStatusPage from './pages/UserStatusPage.js';
import AvailableShips from './pages/AvailableShips.js';
import Marketplace from './pages/Marketplace.js';
import Navigation from './components/Navigation.js';
import { useEffect, useState } from 'react';
import Status from './components/Status.js';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback.js';

function App() {
  const [token, setToken] = useState(loadFromLocal('token'));
  const [user, setUser] = useState(null);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  useEffect(() => {
    saveToLocal('token', token);

    if (token && !user) {
      getUserInfo(token);
    }
  }, [user, token]);

  return (
    <div>
      <h1>SpaceTraders</h1>
      <Navigation />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Status isGreen />
        <Routes>
          <Route
            path="/"
            element={
              <UserStatusPage
                onLogin={loginUser}
                user={user}
                isUsernameTaken={isUsernameTaken}
              />
            }
          />
          <Route path="/ships" element={<AvailableShips />} />
          <Route path="/market" element={<Marketplace />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );

  async function loginUser(username) {
    setIsUsernameTaken(false);

    const response = await fetch(
      `https://api.spacetraders.io/users/${username}/claim`,
      {
        method: 'POST',
      }
    ).catch(error => {
      console.log('ERROR', error.message);
    });

    if (response.ok) {
      const data = await response.json();
      setToken(data.token);
      setUser(data.user);
    } else {
      setIsUsernameTaken(true);
    }
  }

  async function getUserInfo(token) {
    try {
      const response = await fetch(
        'https://api.spacetraders.io/my/account?token=' + token
      );
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }
}

styled.h1`
  font-family: monospace;
`;

export default App;
