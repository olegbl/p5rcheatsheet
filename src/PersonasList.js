import React from 'react';
import Persona from './Persona';
import {personas} from './data/personas';
import {useTabContext} from './TabViewContext';

export default function PersonasList({prefix}) {
  const {addScreens} = useTabContext();

  return (
    <div
      style={{
        paddingLeft: 16,
        paddingRight: 16,
      }}>
      {Object.keys(personas)
        .filter(name => name.toLowerCase().startsWith(prefix.toLowerCase()))
        .sort()
        .map(name => {
          return (
            <div
              key={name}
              style={{
                fontSize: '2rem',
                color: '#FFFFFF',
              }}
              onClick={() => {
                addScreens([
                  {
                    label: name,
                    leaf: true,
                    render: () => <Persona persona={personas[name]} />,
                  },
                ]);
              }}>
              {name}
            </div>
          );
        })}
    </div>
  );
}
