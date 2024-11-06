import 'little-state-machine';
import { FormType } from './form';

declare module 'little-state-machine' {
  interface GlobalState {
    data: FormType;
  }
}
