import React from 'react';
import {dispatch} from './Events';

export default function TabBar({tabs, tab: selectedTabID, onChangeTab}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      {tabs.map(tab => {
        const selected = tab.id === selectedTabID;
        return (
          <div
            key={tab.id}
            style={{
              display: 'inline-block',
              flex: 1,
              paddingTop: 8,
              paddingBottom: 8,
              fontSize: '1.5rem',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              color: selected ? '#FFFFFF' : '#FF0000',
              backgroundColor: selected ? '#FF0000' : '#FFFFFF',
              textShadow: selected
                ? '-2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, 2px 2px 0 #000000'
                : '-2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, 2px 2px 0 #000000',
            }}
            onClick={
              selected
                ? () => dispatch('tab.refresh', {tab})
                : () => onChangeTab(tab.id)
            }>
            {tab.label}
          </div>
        );
      })}
    </div>
  );
}
