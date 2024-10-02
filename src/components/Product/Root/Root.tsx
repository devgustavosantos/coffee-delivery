import { RootProps } from './Root.types';

export function Root({ children, className }: RootProps) {
  return <div {...(className && { className: className })}>{children}</div>;
}
