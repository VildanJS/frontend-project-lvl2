import yaml from 'js-yaml';

export const parsers = {
  json: (file: string) => JSON.parse(file),
  yml: (file: string) => yaml.load(file),
  yaml: (file: string) => yaml.load(file),
};
