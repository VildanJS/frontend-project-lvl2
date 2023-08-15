import { DiffElement } from '../types';
import { isObject, isString } from '../utils';

const renderPlainLine = (value: any): any => {
  if (isObject(value)) return '[complex value]';
  return isString(value) ? `'${value}'` : value;
};

export const plain = (diffObj: { [key: string]: DiffElement }, path: Array<string> = []) => {
  const res: Array<string> = [];
  const jsonDiffEntries = Object.entries(diffObj);

  jsonDiffEntries.forEach(([key, val]: [key: string, val: DiffElement]) => {
    const {
      value,
      previousValue,
      children,
      status,
    } = val;

    const currentPath = [...path, key].join('.');

    switch (status) {
      case 'deleted':
        res.push(`Property '${currentPath}' was removed`);
        break;
      case 'added':
        res.push(`Property '${currentPath}' was added with value: ${renderPlainLine(value)}`);
        break;
      case 'unchanged':
        break;
      case 'changed':
        res.push(`Property '${currentPath}' was updated. From ${renderPlainLine(previousValue)} to ${renderPlainLine(value)}`);
        break;
      case 'nested':
        if (children) {
          res.push(`${plain(children, [...path, key])}`);
        }
        break;
      default:
        throw new Error(`Status: ${status} is undefined`);
    }
  });

  return res.join('\n');
};
