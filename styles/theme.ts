import { DefaultTheme } from 'styled-components';

const colors = {
  cloYellow: '#FFE500',
  cloBlue: '#0147FF',
  cloRed: '#FF3A37',
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
