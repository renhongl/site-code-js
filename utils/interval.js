export function interval(fn, count = -1, delay = 1000) {
  let n = 0;
  let timer = null;
  return function (...args) {
    const context = this;
    timer = setInterval(() => {
      if (timer && count !== -1 && n >= count) {
        return clearInterval(timer);
      }
      console.log(context);
      fn.apply(context, args);
      n++;
    }, delay);
  };
}
