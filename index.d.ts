import {FlatList} from 'react-native';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    currentLine: string;
    selection: string;
    foreground: string;
    comment: string;
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    purple: string;
    red: string;
    yellow: string;
  }
}

declare module 'styled-components/native' {
  export interface StyledFlatList {
    FlatList<T>(styles: any): new () => FlatList<T>;
  }
}
