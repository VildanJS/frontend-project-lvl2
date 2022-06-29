import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import jsYaml from 'js-yaml';
import format from './formatters/index.js';

const resolvePath = (filePath) => {
  const currentDirectory = process.cwd();
  return path.resolve(currentDirectory, filePath);
};

const readData = (filePath) => {
  const resolvedPath = resolvePath(filePath);
  const data = fs.readFileSync(resolvedPath, 'utf8');
  const extension = path.extname(filePath)
    .replace(/\./, '');
  switch (extension) {
    case 'yml':
    case 'yaml':
      return jsYaml.load(data, 'utf-8');
    case 'json':
      return JSON.parse(data);
    default:
      return data;
  }
};

const buildTree = (data1, data2) => {
  const allKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  return allKeys.map((key) => {
    const previous = data1[key];
    const current = data2[key];

    if (_.isObject(previous) && _.isObject(current)) {
      return { name: key, status: 'children', children: buildTree(previous, current) };
    }

    if (previous === current) {
      return { name: key, value: current, status: 'unchanged' };
    }

    if (!_.isUndefined(previous) && !_.isUndefined(current)) {
      return {
        name: key, value: current, oldValue: previous, status: 'changed',
      };
    }

    if (!_.isUndefined(previous)) {
      return { name: key, value: previous, status: 'deleted' };
    }

    if (!_.isUndefined(current)) {
      return { name: key, value: current, status: 'added' };
    }

    return { name: key, status: 'exception' };
  });
};

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const data1 = readData(filePath1);
  const data2 = readData(filePath2);
  const tree = buildTree(data1, data2);
  return format(tree, formatName);
};

genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json');
export default genDiff;
