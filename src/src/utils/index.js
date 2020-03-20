export const toBase64 = file => {
  const reader = new FileReader();
  return new Promise(resolve => {
    reader.onload = ({ target }) => resolve(target.result);
    reader.readAsDataURL(file);
  });
};

export const capitalize = str =>
  `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
