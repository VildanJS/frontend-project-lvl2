import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import jsYaml from 'js-yaml';

const resolvePath = (filePath) => {
  const currentDirectory = process.cwd();
  return path.resolve(currentDirectory, filePath);
};

const readData = (filePath) => {
  const resolvedPath = resolvePath(filePath);
  const data = fs.readFileSync(resolvedPath, 'utf8');
  const extension = path.extname(filePath).replace(/\./, '');
  switch (extension) {
    case 'yml':
    case 'yaml':
      return jsYaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      return data;
  }
};
const helper = (val1, val2, key) => {
  const isDefined1 = !_.isUndefined(val1);
  const isDefined2 = !_.isUndefined(val2);
  const isEqual = val1 === val2;
  let result;
  if (isEqual) {
    result = `   ${key}: ${val1}\n`;
  } else if (isDefined1 && isDefined2) {
    result = ` - ${key}: ${val1}\n  + ${key}: ${val2}\n`;
  } else if (isDefined1) {
    result = ` - ${key}: ${val1}\n`;
  } else if (isDefined2) {
    result = ` + ${key}: ${val2}\n`;
  }
  return result;
};
const genDiff = (filePath1, filePath2) => {
  const data1 = readData(filePath1);
  const data2 = readData(filePath2);
  const allKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  return allKeys.reduce((acc, key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    return `${acc} ${helper(value1, value2, key)}`;
  }, '');
};

export default genDiff;
