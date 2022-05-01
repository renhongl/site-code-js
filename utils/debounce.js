export function debounce(fn, delay = 1000) {
  let timer = null;
  return function (...args) {
    const context = this;
    console.log('this in debounce: ', this);
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
