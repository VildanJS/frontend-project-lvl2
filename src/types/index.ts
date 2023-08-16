interface DiffElement {
  value: any,
  previousValue?: any,
  status: 'changed' | 'unchanged' | 'deleted' | 'added' | 'nested',
  children?: { [key: string]: DiffElement }
}
type Formatters = 'plain' | 'stylish' | 'json';

type IterElement = DiffElement | { [key: string]: DiffElement };

export { DiffElement, Formatters, IterElement };
