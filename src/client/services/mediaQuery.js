// @flow strict
import { css } from 'styled-components';

export const SIZES = {
  DESKTOP: 1220,
  BIG_TABLET: 1112,
  TABLET: 768,
  BIG_MOBILE: 600,
  MIDDLE_MOBILE: 414,
  SMALL_MOBILE: 360,
};

const mq = Object.keys(SIZES).reduce((acc, label) => {
  // $FlowFixMe
  acc[label] = (...args: string[]) => css`
    @media (min-width: ${SIZES[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default mq;
