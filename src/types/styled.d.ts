import {} from 'styled-components';
import { theme } from '../theme/theme';
type Theme = typeof theme;
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
