import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated, setUsername }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user.trim() !== '' && pass.trim() !== '') {
      // Accept any user credentials
      setIsAuthenticated(true);
      setUsername(user);
      setMessage('Login Successful!');
      setError('');
      setTimeout(() => navigate('/home'), 1000); // redirect after short delay
    } else {
      setError('Please enter both username and password.');
      setMessage('');
    }
  };

  const styles = {
    page: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #ffb6c1, #ffc0cb)',
    },
    card: {
      width: '280px',
      padding: '25px',
      borderRadius: '12px',
      background: '#fff',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    input: {
      marginBottom: '12px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#d6336c',
    },
    button: {
      width: '100%',
      backgroundColor: '#d6336c',
      border: 'none',
    },
    success: {
      color: 'green',
      fontSize: '14px',
      marginTop: '10px',
      textAlign: 'center',
    },
    error: {
      color: 'red',
      fontSize: '14px',
      marginTop: '10px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.title}>🍫 ChocoZone Login</div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            style={styles.input}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            style={styles.input}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" style={styles.button} onClick={handleLogin}>
          Login
        </button>

        {message && <div style={styles.success}>{message}</div>}
        {error && <div style={styles.error}>{error}</div>}
      </div>
    </div>
  );
}

export default Login;
