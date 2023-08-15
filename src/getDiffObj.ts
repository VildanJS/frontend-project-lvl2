import { DiffElement } from './types';
import { isObject } from './utils';

export const getDiffObj = (obj1: object, obj2: object): { [key: string]: DiffElement } => {
  const allKeys = [...Object.keys(obj1), ...Object.keys(obj2)];
  const sortedUniqKeys = allKeys
    .filter((item, pos) => allKeys.indexOf(item) === pos)
    .sort();

    type Diff = { [K in typeof sortedUniqKeys[number]]: DiffElement };
    const diff: Diff = {};

    sortedUniqKeys.forEach((key) => {
      const value1 = obj1[key as keyof typeof obj1];
      const value2 = obj2[key as keyof typeof obj2];

      const isDefinedVal1 = Object.hasOwn(obj1, key);
      const isDefinedVal2 = Object.hasOwn(obj2, key);

      if (isDefinedVal1 && !isDefinedVal2) {
        diff[key] = { value: value1, status: 'deleted' };
      } else if (!isDefinedVal1 && isDefinedVal2) {
        diff[key] = { value: value2, status: 'added' };
      } else if (isObject(value1) && isObject(value2)) {
        diff[key] = { status: 'nested', value: null, children: getDiffObj(value1, value2) };
      } else if (value1 !== value2) {
        diff[key] = { value: value2, previousValue: value1, status: 'changed' };
      } else {
        diff[key] = { value: value1, status: 'unchanged' };
      }
    });

    return diff;
};
