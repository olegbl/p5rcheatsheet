import React from 'react';
import {getSeedsForString, randomTransform} from './utils';

export default function Title({label}) {
  return React.useMemo(() => {
    const [labelSeed1, labelSeed2, labelSeed3] = getSeedsForString(label);

    return label.split('').map((char, index) => {
      if (char === ' ') {
        return (
          <div key={index} style={{display: 'inline-block', width: '0.25em'}} />
        );
      }

      const [charSeed1, charSeed2, charSeed3] = getSeedsForString(char);
      const [indexSeed1, indexSeed2, indexSeed3] = getSeedsForString(
        String(char.charCodeAt(0)) +
          String(index * 124 + 44365543 + label.length),
      );

      const colorSeed = (labelSeed1 + charSeed1 + indexSeed1) % 1.0;
      const fontSeed = (labelSeed2 + charSeed2 + indexSeed2) % 1.0;
      const lineSeed = (labelSeed3 + charSeed3 + indexSeed3) % 1.0;
      const caseSeed = (labelSeed1 + charSeed1 + indexSeed2) % 1.0;

      const transformSeed1 = (labelSeed1 + charSeed1 + indexSeed3) % 1.0;
      const transformSeed2 = (labelSeed2 + charSeed2 + indexSeed1) % 1.0;
      const transformSeed3 = (labelSeed3 + charSeed3 + indexSeed2) % 1.0;

      const colors = [
        [0.5, ['#FFFFFF', '#000000']], // white-on-black
        [0.8, ['#000000', '#FFFFFF']], // black-on-white
        [0.9, ['#FFFFFF', '#FF0000']], // white-on-red
        [1.0, ['#FF0000', '#000000']], // red-on-black
      ];

      const [color, backgroundColor] = colors
        .filter(([threshold]) => colorSeed < threshold)
        .map(([_, values]) => values)
        .shift();

      return (
        <div
          key={index}
          style={{
            display: 'inline-block',
            color,
            backgroundColor,
            fontSize: fontSeed > 0.6 ? '0.8em' : '1em',
            fontWeight: fontSeed > 0.6 ? '200' : '400',
            lineHeight:
              lineSeed > 0.6 ? '2.5rem' : lineSeed > 0.4 ? '2.25rem' : '2rem',
            transform: randomTransform(
              1,
              transformSeed1,
              transformSeed2,
              transformSeed3,
            ),
          }}>
          {index === 0 || caseSeed > 0.4
            ? char.toUpperCase()
            : char.toLowerCase()}
        </div>
      );
    });
  }, [label]);
}
