// @flow
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import styled from 'styled-components';
// TODO: mediaquery sizes array

type Props = {
  children: React.Node,
  fontSize?: ?number,
  fontWeight?: ?number,
  color?: ?string,
  className?: ?string,
};

const StyledLine = styled('span')`
  display: inline-block;
  color: ${({ color }) => color || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  font-size: ${({ fontSize }) => `${fontSize}px` || 'inherit'};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
`;

// $FlowFixMe
const Line = (props: Props) => <StyledLine {...props} />;

Line.defaultProps = {
  fontSize: null,
  fontWeight: null,
  color: null,
  className: null,
};

export default Line;
