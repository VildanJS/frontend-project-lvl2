import { stylish } from './stylish';
import { plain } from './plain';
import { DiffElement, Formatters } from '../types';
import { stringify } from './stringify';

export const makeFormat = (data: { [key: string]: DiffElement }, formatter: Formatters) => {
  let res = '';
  switch (formatter) {
    case 'json':
      res = stringify(data, ' ', 2);
      break;
    case 'plain':
      res = plain(data);
      break;
    case 'stylish':
      res = stylish(data);
      break;
    default:
      res = 'No format defined';
  }
  return res;
};
