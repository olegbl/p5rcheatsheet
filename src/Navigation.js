import React from 'react';
import {getSeedsForString, randomTransform} from './utils';

export default function Navigation({index, labels, onChangeIndex}) {
  return (
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        paddingLeft: 8,
        overflow: 'auto',
      }}>
      {labels.map((label, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            width: '3rem',
            height: '3rem',
            boxSizing: 'border-box',
            marginTop: 2,
            marginBottom: 2,
            marginRight: 8,
            borderWidth: '0.25rem',
            borderStyle: 'solid',
            color: index === i ? '#000000' : '#FFFFFF',
            borderColor: index === i ? '#FF0000' : 'transparent',
            backgroundColor: index === i ? '#FFFFFF' : '#FF0000',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            transform: randomTransform(
              0,
              ...getSeedsForString('nav' + Math.sqrt(i * 3)),
            ),
            perspective: '3rem',
          }}
          onClick={() => onChangeIndex(i)}>
          {label
            .split(' ')
            .map(word => word.slice(0, 1))
            .join('')}
        </div>
      ))}
    </div>
  );
}
