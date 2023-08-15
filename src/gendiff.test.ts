import * as path from 'path';
import * as fs from 'fs';
import genDiff from './index';

const getFixturePath = (filename: string) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename: string) => fs.readFileSync(getFixturePath(filename), 'utf-8');
test('stylish', async () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const res = genDiff(path1, path2, 'stylish');
  const expectedStylish = readFile('expected-stylish.txt');
  expect(res).toEqual(expectedStylish);
});

test('plain', async () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const res = genDiff(path1, path2, 'plain');
  const expectedStylish = readFile('expected-plain.txt');
  expect(res).toEqual(expectedStylish);
});

test('json', async () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const res = genDiff(path1, path2, 'json');
  const expectedStylish = readFile('expected-json.txt');
  expect(res).toEqual(expectedStylish);
});
