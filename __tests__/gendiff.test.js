import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (fileName) => fs.readFileSync(getFixturesPath(fileName), 'utf-8');

const json1 = getFixturesPath('file1.json');
const json2 = getFixturesPath('file2.json');
const yml1 = getFixturesPath('file1.yml');
const yml2 = getFixturesPath('file2.yaml');

const resultStylish = readFile('expected_stylish.txt');
const resultPlain = readFile('expected_plain.txt');
const resultJSON = readFile('expected_json.txt');

const inputs = [
  ['json', json1, json2],
  ['yml', yml1, yml2],
];

const expectedResults = [
  ['stylish', resultStylish],
  ['plain', resultPlain],
  ['json', resultJSON],
];

describe.each(inputs)(
  'Generate Differance for files in %s format',
  (inputFormat, file1, file2) => {
    test.each(expectedResults)(
      'Output %s format',
      (outputFormat, expectedResult) => {
        expect(genDiff(file1, file2, outputFormat))
          .toBe(expectedResult);
      },
    );
  },
);
