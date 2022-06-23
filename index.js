import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const resolvePath = (filePath) => {
  const currentDirectory = process.cwd();
  return path.resolve(currentDirectory, filePath);
};

const readData = (filePath) => {
  const resolvedPath = resolvePath(filePath);
  const data = fs.readFileSync(resolvedPath, 'utf8');
  return JSON.parse(data);
};

const helper = (val1, val2, key) => {
  const isDefined1 = !_.isUndefined(val1);
  const isDefined2 = !_.isUndefined(val2);
  const isEqual = val1 === val2;
  if (isEqual) {
    return `   ${key}: ${val1}\n`;
  } if (isDefined1 && isDefined2) {
    return ` - ${key}: ${val1}\n  + ${key}: ${val2}\n`;
  } if (isDefined1) {
    return ` - ${key}: ${val1}\n`;
  } if (isDefined2) {
    return ` + ${key}: ${val2}\n`;
  } return '';
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
