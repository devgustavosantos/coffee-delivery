import { RootProps } from './Root.types';

export function Root({ children, className }: RootProps) {
  return className ? (
    <div className={className}>{children}</div>
  ) : (
    <div>{children}</div>
  );
}
