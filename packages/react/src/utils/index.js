export const safeInvoke = (fn, ...args) => {
  const isFunction = typeof fn === 'function';
  return isFunction ? fn(...args) : null;
};

export const toBase64 = file => {
  const reader = new FileReader();
  return new Promise(resolve => {
    reader.onload = ({ target }) => resolve(target.result);
    reader.readAsDataURL(file);
  });
};
