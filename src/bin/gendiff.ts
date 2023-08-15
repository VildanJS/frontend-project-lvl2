import { Command } from '@commander-js/extra-typings';
import { genDiff } from '../index';
import { Formatters } from '../types';

const program = new Command();

program
  .version('0.8.0')
  .description('Compares two configuration files and shows a difference')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const diff = genDiff(filepath1, filepath2, options.format as Formatters);
    console.log('---->', diff);
  });

program.parse();
