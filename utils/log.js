export function log(fn, type = 'log') {
  const map = {
    log: (data) => {
      console.log(data);
    },
    warn: (data) => {
      console.warn(data);
    },
    error: (data) => {
      console.error(data);
    },
  };
  return function (...args) {
    const context = this;
    const result = fn.apply(context, args);
    map[type](result);
  };
}
