import * as fs from 'fs';
import * as path from 'path';
import { parsers } from './parsers';
import { normalizePath } from './utils';
import { getDiffObj } from './getDiffObj';
import { makeFormat } from './formatters';
import { Formatters } from './types';

export const genDiff = (filepath1: string, filepath2: string, format: Formatters = 'stylish') => {
  const extname1 = path.extname(path.basename(filepath1)).slice(1);
  const extname2 = path.extname(path.basename(filepath1)).slice(1);

  const firstNormalizedPath = normalizePath(filepath1);
  const firstFileContent = fs.readFileSync(firstNormalizedPath, { encoding: 'utf8' });
  const objFromSource1 = parsers[extname1 as keyof typeof parsers](firstFileContent);

  const secondNormalized = normalizePath(filepath2);
  const secondFileContent = fs.readFileSync(secondNormalized, { encoding: 'utf8' });
  const objFromSource2 = parsers[extname2 as keyof typeof parsers](secondFileContent);

  const diffObj = getDiffObj(objFromSource1, objFromSource2);
  return makeFormat(diffObj, format);
};
