import { debounce, createElement, getRoot } from '..';

export const testDebounce = () => {
  const app = getRoot();
  const input = createElement('input', app);
  console.log('test debounce');
  console.log('test debounce');
};
