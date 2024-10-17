import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="error-message" style={errorStyle}>
      <i className="bi bi-emoji-frown" style={{ marginRight: '8px' }}></i>
      {message}
    </div>
  );
}

// Inline styling for the error message
const errorStyle = {
  color: '#282361',
  backgroundColor: '#ffe6e6',
  padding: '10px 20px',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  border: '1px solid #f44336',
  maxWidth: '400px',
  margin: '10px auto',
};

export default ErrorMessage;
