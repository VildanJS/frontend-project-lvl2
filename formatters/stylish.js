import _ from 'lodash';

const makeSpace = (n) => ' '.repeat(n);
const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const result = Object.keys(value).map((key) => {
    if (_.isObject(value[key])) {
      return `${makeSpace(depth + 8)}${key}: ${stringify(value[key], depth + 4)}`;
    }
    return `${makeSpace(depth + 8)}${key}: ${value[key]}`;
  });

  return ['{', ...result, `${makeSpace(depth + 4)}}`].join('\n');
};
const stylish = (tree) => {
  const iter = (items, depth) => {
    const result = items.map((item) => {
      const {
        name, value, oldValue, status, children,
      } = item;
      switch (status) {
        case 'children':
          return `${makeSpace(depth + 2)}  ${name}: ${iter(children, depth + 4)}`;
        case 'unchanged':
          return `${makeSpace(depth + 2)}  ${name}: ${stringify(value, depth)}`;
        case 'changed':
          return `${makeSpace(depth + 2)}- ${name}: ${stringify(oldValue, depth)}\n`
            + `${makeSpace(depth + 2)}+ ${name}: ${stringify(value, depth)}`;
        case 'deleted':
          return `${makeSpace(depth + 2)}- ${name}: ${stringify(value, depth)}`;
        case 'added':
          return `${makeSpace(depth + 2)}+ ${name}: ${stringify(value, depth)}`;
        default:
          throw new Error(`Wrong status ${status}`);
      }
    });
    return ['{', ...result, `${makeSpace(depth)}}`].join('\n');
  };
  return iter(tree, 0);
};
export default stylish;
