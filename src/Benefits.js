import React from 'react';

export default function Benefits({confidant}) {
  return (
    <div
      style={{
        paddingLeft: 16,
        paddingRight: 16,
      }}>
      {confidant.benefits.map(({rank, label, description}) => (
        <div
          key={rank}
          style={{
            marginBottom: 8,
            color: '#FFFFFF',
          }}>
          <div
            style={{
              fontSize: '1.5rem',
            }}>
            {rank} {label}
          </div>
          <div
            style={{
              fontSize: '1rem',
            }}>
            {description}
          </div>
        </div>
      ))}
    </div>
  );
}
