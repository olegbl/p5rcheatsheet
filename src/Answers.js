import React from 'react';
import Title from './Title';
import {answers} from './data/answers';

const ANSWERS_BY_MONTH = answers.reduce((arr, [datetime, answer]) => {
  const [, month, date] = datetime.match(/^([a-zA-Z]+) ([0-9]+)$/);
  if (arr.length === 0 || arr[arr.length - 1].month !== month) {
    arr.push({month, answers: []});
  }
  arr[arr.length - 1].answers.push({date, answer});
  return arr;
}, []);

export default function Answers() {
  return (
    <div
      style={{
        paddingLeft: 16,
        paddingRight: 16,
      }}>
      {ANSWERS_BY_MONTH.map(({month, answers}) => (
        <div
          key={month}
          style={{
            marginBottom: 8,
            color: '#FFFFFF',
            fontSize: '1.5rem',
          }}>
          <div
            style={{
              color: '#FF0000',
            }}>
            {month}
          </div>
          {answers.map(({date, answer}) => (
            <div key={date}>
              <Title label={date + '  '} />
              {answer}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
