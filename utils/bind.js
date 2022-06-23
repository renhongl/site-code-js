Function.prototype.myBind = function (context) {
  context = typeof context === 'object' ? context : window;
  const key = Symbol();
  context[key] = this;
  return context[key];
};
