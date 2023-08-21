import path from 'path';

const isObject = (yourVariable: any): boolean => typeof yourVariable === 'object'
    && !Array.isArray(yourVariable)
    && yourVariable !== null;

const isString = (yourVariable: any): boolean => typeof yourVariable === 'string';

const getAbsolutePath = (execPath: string) => path.resolve(process.cwd(), execPath)

export { getAbsolutePath, isObject, isString };
