import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setIsAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(false);
  }, [setIsAuthenticated]);

  return (
    <div>
      <h3>You have been logged out.</h3>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
        Return to Login
      </button>
    </div>
  );
}

export default Logout;
