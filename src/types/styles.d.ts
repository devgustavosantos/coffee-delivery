/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import { COLORS } from '@/styles/colors';

type ThemeType = typeof COLORS;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
