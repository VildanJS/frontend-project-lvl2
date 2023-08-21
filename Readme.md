### Hexlet tests and linter status:
[![Actions Status](https://github.com/VildanJS/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/VildanJS/frontend-project-lvl2/actions)
[![NodeCI](https://github.com/VildanJS/frontend-project-lvl2/actions/workflows/Github-Actions.yml/badge.svg)](https://github.com/VildanJS/frontend-project-lvl2/actions/workflows/Github-Actions.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/2aed6a559b72da8789d4/maintainability)](https://codeclimate.com/github/Giridhar108/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2aed6a559b72da8789d4/test_coverage)](https://codeclimate.com/github/Giridhar108/frontend-project-lvl2/test_coverage)

*Read this in other languages: [English](README.ru.md), [Russian](README.ru.md).*

# Educational project

## Project "Generate Difference"

Try this simple tool for comparing the json and yaml files, powered by <b>Node.js</b> by running one CLI command!
This package includes 3 types of formatters, it is very simple and easy for use!

## Features:

* Supports file formats: json, yml, yaml;
* Generating a report in the form of plain text, json, stylish tree;

## ⚡️ Quick start
First of all, clone this repository:
```bash
git clone https://github.com/VildanJS/frontend-project-lvl2
```

Then go to the project directory:

```bash
cd frontend-project-lvl2
```

Next, run the command: 

```bash
./bin/gendiff.js -h
```

which will display
```
Usage: gendiff [options] <firstConfig> <secondConfig>

Compares two configuration files and shows a difference.

Options:

  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           output usage information
```

## 🚀 Starting a comparison:

```bash
./bin/gendiff.js ./before.json ./after.json
```

### Options

The utility supports both relative paths and absolute paths.

The following formatting formats are supported:
* stylish (default)
* plain
* JSON

Use the -f or --format flag to output the information in the desired format.
`./bin/gendiff.js ./before.json ./after.json --format plain`

To use the utility directly, as shown in the example below.
It is necessary to execute in the terminal: `npm link`
```bash
gendiff ./before.json ./after.json
```

## Usage examples
### `Stylish`

This formatter will show the whole structure of a file with '+' or '-' signs in each difference case.

Launch command with included fixtures to check it:
[![asciicast](https://asciinema.org/a/380750.svg)](https://asciinema.org/a/380750)

### `Plain`

This formatter will show each difference case in a single line, discribing the difference.
[![asciicast](https://asciinema.org/a/k56y0xAy95Fzj7pGj9ty90oiN.svg)](https://asciinema.org/a/k56y0xAy95Fzj7pGj9ty90oiN)

### `JSON`

Sometimes we need the raw tree to check, JSON formatter will show you the difference in JSON format.
[![asciicast](https://asciinema.org/a/m9yMDOx2bLLxAvyPVLQO40ICZ.svg)](https://asciinema.org/a/m9yMDOx2bLLxAvyPVLQO40ICZ)