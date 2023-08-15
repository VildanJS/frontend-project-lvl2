import { DiffElement } from '../types';
import { isObject, isString } from '../utils';

type IterElement = DiffElement | { [key: string]: DiffElement };

export const stringify = (diffObj: { [key: string]: DiffElement }, replacer = ' ', spacesCount = 2) => {
  const iter = (currentValue: IterElement, depth = 1) => {
    if (isString(currentValue)) return `"${currentValue}"`;

    if (!isObject(currentValue)) return `${currentValue}`;

    const currentIndent = replacer.repeat(depth * spacesCount);
    const bracketIndent = replacer.repeat(depth * spacesCount - spacesCount);

    const lines: Array<string> = Object
      .entries(currentValue)
      .map(([key, val], index, array) => {
        const isLast = array.length - 1 === index;
        return `${currentIndent}"${key}": ${iter(val, depth + 1)}${isLast ? '' : ','}`;
      });

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(diffObj, 1);
};
