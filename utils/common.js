/**
 * Common functions
 */

export const getRoot = () => document.getElementById('app');

export const submit = (data) => {
  console.log('submting data: ', data);
};

export const createElement = (type, parent) => {
  const ele = document.createElement(type);
  parent.appendChild(ele);
  return ele;
};
