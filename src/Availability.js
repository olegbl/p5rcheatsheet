import React from 'react';

export default function Availability({confidant}) {
  return (
    <div
      style={{
        paddingLeft: 16,
        paddingRight: 16,
      }}>
      {(confidant.availabilities || [])
        .reduce((days, [day, time, availability]) => {
          if (days.length === 0 || days[days.length - 1].day !== day) {
            days.push({day, times: []});
          }
          days[days.length - 1].times.push({time, availability});
          return days;
        }, [])
        .map(({day, times}) => (
          <div
            key={day}
            style={{
              marginBottom: 8,
              color: '#FFFFFF',
              fontSize: '1.5rem',
            }}>
            <div style={{}}>{day}</div>
            {times.map(({time, availability}) => (
              <div
                key={time}
                style={{
                  display: 'inline-block',
                  color: availability ? '#FFFFFF' : '#FF0000',
                  marginRight: 16,
                }}>
                {time}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
