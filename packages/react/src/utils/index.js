export const safeInvoke = (fn, ...args) => {
  const isFunction = typeof fn === "function";
  return isFunction ? fn(...args) : null;
};
