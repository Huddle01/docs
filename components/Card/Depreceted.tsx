import React from 'react';

const DeprecatedHeader = ({ title }) => (
  <h2 style={{
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'Arial, sans-serif',
    margin: '1rem 0 0.5rem 0'
  }}>
    <span style={{
      fontWeight: 'bold',
      fontSize: '1.875rem',
      color: 'white'
    }}>
      {title}
    </span>
    <span style={{
      backgroundColor: 'red',
      color: 'white',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: 'ui-monospace, "Courier New", monospace',
      fontWeight: 'bold'
    }}>
      [Deprecated]
    </span>
  </h2>
);

export default DeprecatedHeader;
