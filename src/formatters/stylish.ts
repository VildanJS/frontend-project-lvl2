import { isObject } from '../utils';
import { DiffElement } from '../types';

const getIndent = (depth: number, replacer = ' ') => replacer.repeat(depth * 2);
const getMinusIndent = (depth: number, replacer = ' ') => replacer.repeat(depth * 2 - 2);
const getPlusIndent = (depth: number, replacer = ' ') => replacer.repeat(depth * 2 + 2);

const renderElement = (element: any, spacesCount: number) => {
  const spacer = getIndent(spacesCount);
  const closingSpacer = getMinusIndent(spacesCount);

  if (!isObject(element)) return element;

  const res: Array<string> = Object.entries(element)
    .map(([key, value]) => `${spacer}  ${key}: ${renderElement(value, spacesCount + 2)}`);

  return `{\n${res.join('\n')}\n${closingSpacer}}`;
};

enum Prefix {
  added = '+',
  deleted = '-',
  unchanged = ' ',
}

const renderLine = (key: string, value: any, depth: number, type: keyof typeof Prefix) => {
  const spacer = getIndent(depth);
  return `${spacer}${Prefix[type]} ${key}: ${renderElement(value, depth + 2)}`;
};
const iter = (diffObj: { [key: string]: DiffElement }, depth = 1) => {
  const spacer = getIndent(depth);
  const plusSpacer = getPlusIndent(depth);

  const res: Array<string> = [];
  const jsonDiffEntries = Object.entries(diffObj);

  jsonDiffEntries.forEach(([key, val]: [key: string, val: DiffElement]) => {
    const {
      value,
      previousValue,
      children,
      status,
    } = val;

    switch (status) {
      case 'deleted':
        res.push(renderLine(key, value, depth, status));
        break;
      case 'added':
        res.push(renderLine(key, value, depth, status));
        break;
      case 'unchanged':
        res.push(renderLine(key, value, depth, status));
        break;
      case 'changed':
        res.push(`${renderLine(key, previousValue, depth, 'deleted')}\n${renderLine(key, value, depth, 'added')}`);
        break;
      case 'nested':
        if (children) {
          res.push(`${spacer}  ${key}: {\n${iter(children, depth + 2)}\n${plusSpacer}}`);
        }
        break;
      default:
        console.log('no status defined');
        break;
    }
  });
  return res.join('\n');
};

const stylish = (diffObj: { [key: string]: DiffElement }) => `{\n${iter(diffObj, 1)}\n}`;

export { stylish };
