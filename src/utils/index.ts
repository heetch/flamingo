export const toBase64 = (file: File) => {
  const reader: FileReader = new FileReader();
  return new Promise(resolve => {
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

export const capitalize = (str: string): string =>
  `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
