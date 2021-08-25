import { isClient } from '.';

export const getInitialState = (initialState, defaultValue) => {
  if (!isClient() && initialState) return initialState.items;
  if (isClient && window.__INITIAL_STATE__)
    return window.__INITIAL_STATE__.items;
  return defaultValue;
};
