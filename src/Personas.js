import React from 'react';
import Title from './Title';
import PersonasList from './PersonasList';
import {useTabContext} from './TabViewContext';

export default function Personas() {
  const {addScreens} = useTabContext();

  return (
    <div
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: '4rem',
      }}>
      {new Array(26)
        .fill(null)
        .map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
        .map(c => (
          <div
            key={c}
            style={{
              display: 'inline-block',
              padding: 8,
            }}
            onClick={() => {
              addScreens([
                {
                  label: c.toUpperCase() + ' Personas',
                  render: () => <PersonasList prefix={c} />,
                },
              ]);
            }}>
            <Title label={c} />
          </div>
        ))}
    </div>
  );
}
