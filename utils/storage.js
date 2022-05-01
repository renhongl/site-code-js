export class Storage {
  constructor(nameSpace) {
    this.nameSpace = nameSpace;
  }

  _getStorage() {
    return window.localStorage.getItem(this.nameSpace);
  }

  getItem(key) {
    let storage = this._getStorage();
    if (!storage) {
      return null;
    } else {
      storage = JSON.parse(storage);
      const result = storage[key] || '';
      return result;
    }
  }

  setItem(key, val) {
    let storage = this._getStorage();
    if (!storage) {
      storage = {};
    } else {
      storage = JSON.parse(storage);
    }
    storage[key] = val;
    window.localStorage.setItem(this.nameSpace, JSON.stringify(storage));
  }
}
