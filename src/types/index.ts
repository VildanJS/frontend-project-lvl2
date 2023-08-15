interface DiffElement {
  value: any,
  previousValue?: any,
  status: 'changed' | 'unchanged' | 'deleted' | 'added' | 'nested',
  children?: { [key: string]: DiffElement }
}
type Formatters = 'plain' | 'stylish' | 'json';
export { DiffElement, Formatters };
