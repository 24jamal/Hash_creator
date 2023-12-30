import React from 'react';

function Info(props) {
    return (
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          margin: 'auto',
          marginTop: '20px',
          width: '90%',
          padding: '20px',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif', // Change to your preferred font family
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          background: '#fff',
        }}>
          <p style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }}>
            Input: {props.input}
          </p>
          <p style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }}>
            Hash Value: {props.hash}
          </p>
          <p style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }}>
            Algorithm: {props.algo}
          </p>
        </div>
      );
      
}
export default Info;