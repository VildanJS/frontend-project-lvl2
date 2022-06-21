#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';

const program = new Command();

program
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compare two configuration files and shows difference');

program.parse();
