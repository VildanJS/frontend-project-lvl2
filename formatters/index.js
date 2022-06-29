import stylish from './stylish.js';
import plain from './plain.js';

export default (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree, null, 2);
    default:
      throw new Error(`Wrong format ${formatName}`);
  }
};
