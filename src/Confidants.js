import React from 'react';
import Benefits from './Benefits';
import Availability from './Availability';
import Conversations from './Conversations';
import {confidants} from './data/confidants';
import {useTabContext} from './TabViewContext';

export default function Confidants() {
  const {addScreens} = useTabContext();

  return confidants
    .reduce((rows, confidant) => {
      if (rows.length === 0 || rows[rows.length - 1].length >= 3) {
        rows.push([]);
      }
      const row = rows[rows.length - 1];
      row.push(confidant);
      return rows;
    }, [])
    .map((row, index) => (
      <div key={index} style={{}}>
        {row.map(confidant => (
          <div
            key={confidant.id}
            style={{
              position: 'relative',
              display: 'inline-block',
              width: 'calc(100% / 3)',
            }}
            onClick={() => {
              addScreens(
                [
                  {
                    label: 'Benefits',
                    render: () => <Benefits confidant={confidant} />,
                  },
                  confidant.availabilities == null
                    ? null
                    : {
                        label: 'Availability',
                        render: () => <Availability confidant={confidant} />,
                      },
                  ...(confidant.conversations || []).map(
                    ({label, note, responses}) => ({
                      label,
                      render: () => (
                        <Conversations
                          label={label}
                          note={note}
                          responses={responses}
                        />
                      ),
                    }),
                  ),
                ].filter(Boolean),
              );
            }}>
            <img
              style={{
                width: '100%',
              }}
              src={'./confidants/' + confidant.id.replace(' ', '') + '.jpg'}
              alt={confidant.name}
            />
            <div
              style={{
                position: 'absolute',
                top: '0.1rem',
                left: '0.1rem',
                right: '0.1rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'center',
                fontSize: '1.6rem',
                color: '#FFFFFF',
                textShadow:
                  '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
              }}>
              {confidant.name}
            </div>
          </div>
        ))}
      </div>
    ));
}
