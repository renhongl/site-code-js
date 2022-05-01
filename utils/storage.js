export function getItem(key) {
  let storage = window.localStorage.getItem(nameSpace);
  if (!storage) {
    storage = {};
  } else {
    storage = JSON.parse(storage);
  }
  const result = storage[key] || '';
  return result;
}

export function storage(val = 'default') {
  let nameSpace = val;
  return function () {
    return [getItem];
  };
}
