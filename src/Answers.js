import React from 'react';
import Title from './Title';
import {answers} from './data/answers';

const ANSWERS_BY_MONTH = answers.reduce((arr, [month, date, ...answers]) => {
  if (arr.length === 0 || arr[arr.length - 1].month !== month) {
    arr.push({month, answers: []});
  }
  arr[arr.length - 1].answers.push({date, answers});
  return arr;
}, []);

export default function Answers() {
  return (
    <div
      id="answers"
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        color: '#FFFFFF',
      }}>
      {ANSWERS_BY_MONTH.map(({month}) => (
        <div
          key={'link-' + month}
          style={{
            display: 'inline-block',
            fontSize: '2rem',
            marginRight: '1rem',
          }}
          onClick={() => {
            document.getElementById(
              'answers',
            ).parentNode.scrollTop = document.getElementById(month).offsetTop;
          }}>
          {month}
        </div>
      ))}
      {ANSWERS_BY_MONTH.map(({month, answers}) => (
        <div
          id={month}
          key={'content-' + month}
          style={{
            fontSize: '1.5rem',
          }}>
          {answers.map(({date, answers}) => (
            <div key={date}>
              {month} <Title label={date + '  '} />
              {answers.map(answer => (
                <div
                  style={{
                    paddingLeft: '2rem',
                  }}>
                  {answer}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
