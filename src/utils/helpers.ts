// helpers for the app (ex: function that merge two arrays of strings)
export const mergeArrays = (array1: unknown[], array2: unknown[]) => {
  return [...array1, ...array2];
};

// function to find the index of an object in an array
export const findIndex = (array: unknown[], object: unknown) => {
  return array.findIndex((item) => item === object);
};