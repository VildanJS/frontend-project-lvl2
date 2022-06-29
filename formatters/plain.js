import _ from 'lodash';

const strigify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return `${value}`;
};

export default (tree) => {
  const iter = (items, path) => {
    const result = items.map((item) => {
      const {
        name,
        value,
        oldValue,
        status,
        children,
      } = item;
      const newPath = [path, name].flat();
      switch (status) {
        case 'children':
          return iter(children, newPath.join('.'));
        case 'unchanged':
          return null;
        case 'changed':
          return `Property '${newPath.join('.')}' was updated. From ${strigify(oldValue)} to ${strigify(value)}`;
        case 'deleted':
          return `Property '${newPath.join('.')}' was removed`;
        case 'added':
          return `Property '${newPath.join('.')}' was added with value: ${strigify(value)}`;
        default:
          throw new Error(`Wrong status ${status}`);
      }
    });
    return result.filter((item) => item !== null).join('\n');
  };
  return iter(tree, []);
};
