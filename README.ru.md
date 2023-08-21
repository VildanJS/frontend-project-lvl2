### Hexlet tests and linter status:
[![Actions Status](https://github.com/VildanJS/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/VildanJS/frontend-project-lvl2/actions)
[![NodeCI](https://github.com/VildanJS/frontend-project-lvl2/actions/workflows/Github-Actions.yml/badge.svg)](https://github.com/VildanJS/frontend-project-lvl2/actions/workflows/Github-Actions.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/2aed6a559b72da8789d4/maintainability)](https://codeclimate.com/github/Giridhar108/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2aed6a559b72da8789d4/test_coverage)](https://codeclimate.com/github/Giridhar108/frontend-project-lvl2/test_coverage)

*Read this in other languages: [English](README.ru.md), [Russian](README.ru.md).*

# Учебный проект

## Проект "Вычислитель отличий"

Утилита для поиска отличий в конфигурационных файлах.

## Возможности утилиты:

* Поддержка форматов: json, yml, yaml;
* Генерация отчета в виде plain text, json, stylish(tree);

## ⚡️ Быстрый старт

```bash
git clone https://github.com/VildanJS/frontend-project-lvl2
```

Перейдите в директорию с проектом, выполнив следующую команду в терминале:

```bash
cd frontend-project-lvl2
```

## ⚙️ Справка:
Запустите в терминале `./bin/gendiff.js -h` чтобы вывести справку
```
Usage: gendiff [options] <firstConfig> <secondConfig>

Compares two configuration files and shows a difference.

Options:

  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           output usage information
```

## 🚀 Запуск утилиты

```bash
./bin/gendiff.js ./before.json ./after.json
```

### Options

Утилита поддерживает как относительные пути, так и абсолютные.

Поддерживаются следующие форматы форматирования
* stylish (default)
* plain
* JSON

Используйте -f или --format флаг чтобы вывести информацию в нужном формате.
`./bin/gendiff.js ./before.json ./after.json --format plain`

Чтобы использовать утилиту напрямую, как показано в примере ниже.
Необходимо выполнить в терминале: npm link
```bash
gendiff ./before.json ./after.json
```

## Пример использования
### Stylish
[![asciicast](https://asciinema.org/a/380750.svg)](https://asciinema.org/a/380750)

### Plain
[![asciicast](https://asciinema.org/a/k56y0xAy95Fzj7pGj9ty90oiN.svg)](https://asciinema.org/a/k56y0xAy95Fzj7pGj9ty90oiN)

### Json
[![asciicast](https://asciinema.org/a/m9yMDOx2bLLxAvyPVLQO40ICZ.svg)](https://asciinema.org/a/m9yMDOx2bLLxAvyPVLQO40ICZ)