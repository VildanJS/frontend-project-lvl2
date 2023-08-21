import { stylish } from './stylish';
import { plain } from './plain';
import { DiffElement, Formatters } from '../types';
import { stringify } from './stringify';

export const makeFormat = (data: { [key: string]: DiffElement }, formatter: Formatters) => {
  switch (formatter) {
    case 'json':
      return stringify(data, ' ', 2);
    case 'plain':
      return plain(data);
    case 'stylish':
      return stylish(data);
    default:
      throw new Error(`Invalid formatter - ${formatter})`)
  }
};
