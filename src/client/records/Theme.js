// @flow strict
import { SIZES } from '../services/mediaQuery';

type ThemeDefinition = {
  primary: string,
  secondary: string,
};

const Theme: ThemeDefinition = {
  primary: '#000000',
  secondary: '#ffffff',
  gray: '#3d3e41',
  breakpoints: [
    `${SIZES.SMALL_MOBILE}px`,
    `${SIZES.MIDDLE_MOBILE}px`,
    `${SIZES.BIG_MOBILE}px`,
    `${SIZES.TABLET}px`,
    `${SIZES.DESKTOP}px`,
  ],
};

export default Theme;
