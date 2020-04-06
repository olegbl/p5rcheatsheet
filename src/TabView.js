import React, {useEffect} from 'react';
import Title from './Title';
import Navigation from './Navigation';
import {TabContext} from './TabViewContext';
import {useOnEvent} from './Events';

function Tab({tab, selected}) {
  const [{index, screens}, setState] = React.useState({
    index: 0,
    screens: [],
  });

  const addScreens = React.useCallback(
    newScreens => {
      setState(oldState => ({
        ...oldState,
        index: oldState.screens.length + 1,
        screens: [...oldState.screens, ...newScreens],
      }));
    },
    [setState],
  );

  const context = React.useMemo(
    () => ({
      addScreens,
    }),
    [addScreens],
  );

  const views = React.useMemo(() => [tab, ...screens], [tab, screens]);
  const labels = React.useMemo(() => views.map(({label}) => label), [views]);
  const isNavigationVisible = views.length > 1;

  const onRefreshTab = React.useCallback(
    event => {
      if (event.tab.id === tab.id) {
        setState(oldState => ({
          ...oldState,
          index: 0,
          screens: [],
        }));
      }
    },
    [tab.id, setState],
  );
  useOnEvent('tab.refresh', onRefreshTab);

  useEffect(() => {
    setState(oldState => ({
      ...oldState,
      screens:
        index === 0
          ? []
          : oldState.screens.filter(
              (screen, i) => !(index < i + 1 && screen.leaf),
            ),
    }));
  }, [index, setState]);

  return (
    <TabContext.Provider value={context}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          opacity: selected ? 1 : 0,
          transform: selected ? null : 'translateX(-100%)',
        }}
        pointerEvents={selected ? 'auto' : 'none'}>
        <div
          style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            boxSizing: 'border-box',
            paddingRight: isNavigationVisible ? '3rem' : 0,
          }}>
          <div
            style={{
              paddingLeft: 16,
              paddingTop: 8,
              paddingBottom: 8,
              fontSize: '3rem',
            }}>
            <Title label={views[index].label} />
          </div>
          {views[index].render()}
        </div>
        {!isNavigationVisible ? null : (
          <Navigation
            index={index}
            labels={labels}
            onChangeIndex={index =>
              setState(oldState => ({
                ...oldState,
                index,
              }))
            }
          />
        )}
      </div>
    </TabContext.Provider>
  );
}

export default function TabView({tab: selectedTabID, tabs}) {
  return (
    <div
      style={{
        position: 'relative',
        flex: 1,
      }}>
      {tabs.map(tab => (
        <Tab key={tab.id} tab={tab} selected={tab.id === selectedTabID} />
      ))}
    </div>
  );
}
