import React from 'react';

export default function Conversations({note, responses}) {
  return (
    <div
      style={{
        paddingLeft: 16,
        paddingRight: 16,
      }}>
      {note === '' ? null : (
        <div
          style={{
            paddingBottom: 16,
            color: '#FFFFFF',
            fontSize: '1.5rem',
          }}>
          {note}
        </div>
      )}
      {responses.map((answers, index) => (
        <div
          key={index}
          style={{
            paddingBottom: 16,
            color: '#FFFFFF',
            fontSize: '1rem',
          }}>
          {answers.map(answer => (
            <div key={answer}>{answer}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
