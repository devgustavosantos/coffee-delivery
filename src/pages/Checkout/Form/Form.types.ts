export interface Input {
  name: string;
  type: 'text' | 'select';
  isRequired: boolean;
  options?: string[];
}
