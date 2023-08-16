import * as path from 'path';
import * as fs from 'fs';
import genDiff from '../src';

const getFixturePath = (filename: string) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename: string) => fs.readFileSync(getFixturePath(filename), 'utf-8');

let expectedStylish: string; let expectedPlain: string;
let expectedJson: string;

let beforeJSONPath: string; let afterJSONPath: string;
let beforeYMLPath: string; let afterYMLPath: string;
beforeAll(() => {
  expectedStylish = readFile('expected-stylish.txt');
  expectedPlain = readFile('expected-plain.txt');
  expectedJson = readFile('expected-json.txt');

  beforeJSONPath = getFixturePath('file1.json');
  afterJSONPath = getFixturePath('file2.json');
  beforeYMLPath = getFixturePath('file1.yml');
  afterYMLPath = getFixturePath('file2.yml');
});

test('stylish', async () => {
  const resJSON = genDiff(beforeJSONPath, afterJSONPath, 'stylish');
  const resYML = genDiff(beforeYMLPath, afterYMLPath, 'stylish');
  expect(resJSON).toEqual(expectedStylish);
  expect(resYML).toEqual(expectedStylish);
});

test('plain', async () => {
  const resJSON = genDiff(beforeJSONPath, afterJSONPath, 'plain');
  const resYML = genDiff(beforeYMLPath, afterYMLPath, 'plain');
  expect(resJSON).toEqual(expectedPlain);
  expect(resYML).toEqual(expectedPlain);
});

test('json', async () => {
  const resJSON = genDiff(beforeJSONPath, afterJSONPath, 'json');
  const resYML = genDiff(beforeYMLPath, afterYMLPath, 'json');
  expect(resJSON).toEqual(expectedJson);
  expect(resYML).toEqual(expectedJson);
});
