import OS from 'os';
import path from 'path';
import { cwd } from 'node:process';

const isObject = (yourVariable: any): boolean => typeof yourVariable === 'object'
    && !Array.isArray(yourVariable)
    && yourVariable !== null;

const isString = (yourVariable: any): boolean => typeof yourVariable === 'string';

const isPathRelative = (inputPath: string) => inputPath === '.' || inputPath.startsWith('./') || inputPath.startsWith('../');

function normalizePath(execPath: string) {
  const splitter = (OS.type() === 'Windows_NT') ? '\\' : '/';
  const normalizedPath = path
    .normalize(execPath)
    .split(splitter)
    .join('/');

  if (isPathRelative(execPath)) return path.resolve(cwd(), normalizedPath);
  return normalizedPath;
}

export { normalizePath, isObject, isString };
