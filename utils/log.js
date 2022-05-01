export function log(fn, type = 'log') {
  const map = {
    log: console.log,
    warn: console.warn,
    error: console.error,
  };
  return (...args) => {
    console.log('this in log: ', this);
    const context = this;
    const result = fn.apply(context, args);
    map[type](result);
  };
}
