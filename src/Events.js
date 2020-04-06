import React from 'react';

let listeners = [];

export function removeEventListener(listener) {
  listeners = listeners.filter(l => l !== listener);
}

export function addEventListener(listener) {
  listeners = [...listeners, listener];
  return () => removeEventListener(listener);
}

export function useEventListener(listener) {
  React.useEffect(() => {
    return addEventListener(listener);
  }, [listener]);
}

export function useOnEvent(id, listener) {
  const eventListener = React.useCallback(
    event => {
      if (event.id === id) {
        listener(event);
      }
    },
    [id, listener],
  );

  useEventListener(eventListener);
}

export function dispatch(id, data) {
  listeners.map(listener => listener({...data, id}));
}
