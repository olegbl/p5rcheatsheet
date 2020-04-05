import React from 'react';
import {skills} from './data/skills';

const elements = [
  ['Physical', 0, 6],
  ['Gun', 0, 7],
  ['Fire', 1, 6],
  ['Ice', 1, 7],
  ['Electric', 2, 7],
  ['Wind', 2, 6],
  ['Psychic', 3, 7],
  ['Nuclear', 3, 6],
  ['Bless', 1, 8],
  ['Curse', 2, 8],
];

function Section({label}) {
  return (
    <div
      style={{
        marginTop: 16,
        fontSize: '2rem',
      }}>
      {label}
    </div>
  );
}

function Element({element, x, y, status}) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '20%',
        paddingLeft: 4,
        paddingRight: 4,
        boxSizing: 'border-box',
      }}>
      <img
        style={{
          width: '100%',
        }}
        src={'./skills/' + element + '.png'}
        alt={element}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          fontSize: '1.5rem',
          lineHeight: '1rem',
          color: '#FFFFFF',
          textShadow:
            '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
          zIndex: 100,
        }}>
        {status
          .replace('ab', 'Dr')
          .replace('rs', 'Str')
          .replace('rp', 'Rpl')
          .replace('wk', 'Wk')
          .replace('nu', 'Nul')
          .replace('-', '')}
      </div>
    </div>
  );
}

function Skill({skill, name, level}) {
  const [expanded, setExpanded] = React.useState(false);
  const element = skill.element
    .replace('phys', 'physical')
    .replace('psy', 'psychic')
    .replace('trait', 'passive') // not correct, but don't have an icon for trait
    .split('')
    .map((c, i) => (i === 0 ? c.toUpperCase() : c))
    .join('');

  return (
    <div onClick={() => setExpanded(value => !value)}>
      <img
        style={{
          display: 'inline-block',
          backgroundColor: '#000000',
          width: '2rem',
          marginRight: '1rem',
        }}
        src={'./skills/' + element + '.png'}
        alt={element}
      />
      <div
        style={{
          display: 'inline-block',
          color: '#FFFFFF',
          fontSize: '1.5rem',
        }}>
        {name}
        <span
          style={{
            color: '#AAAAAA',
            marginLeft: '1rem',
          }}>
          Lv{level}
        </span>
      </div>
      {!expanded ? null : (
        <div
          style={{
            fontSize: '1rem',
            color: '#AAAAAA',
          }}>
          {skill.effect}
          {skill.cost == null ? null : (
            <span
              style={{
                color: '#FF0000',
                marginLeft: '0.5rem',
              }}>
              {element === 'Physical'
                ? skill.cost + '% hp'
                : skill.cost / 100 + ' sp'}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default function Persona({persona}) {
  return (
    <div
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        color: '#FFFFFF',
      }}>
      <div>
        <div
          style={{
            display: 'inline-block',
            fontSize: '2rem',
            marginRight: '1rem',
          }}>
          {persona.arcana}
        </div>
        <div
          style={{
            display: 'inline-block',
            fontSize: '1.5rem',
          }}>
          Level <span style={{color: '#FF0000'}}>{persona.level}</span>
        </div>
      </div>
      {elements.map(([element, x, y], elementIndex) => (
        <Element
          key={element}
          element={element}
          x={x}
          y={y}
          status={persona.elems[elementIndex]}
        />
      ))}
      <Section label="Skills" />
      {Object.keys(persona.skills).map(name => (
        <Skill
          key={name}
          skill={skills[name]}
          name={name}
          level={persona.skills[name]}
        />
      ))}
    </div>
  );
}
