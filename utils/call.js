/**
 *
 */
export function myCall(...args) {
  const [context, params] = args;
  const Fn = () => {};
  Fn.prototype = Object.create(context);
}

function sum() {}

sum.call({ x: 1, y: 2 }, 3, 4);
