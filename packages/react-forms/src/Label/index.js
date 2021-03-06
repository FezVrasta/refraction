/**
 * Copyright (c) Quid, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @flow
import * as React from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled/macro';

const HEIGHT = {
  large: 50,
  small: 24,
  regular: 32,
};

const MARGIN = {
  large: 15,
  small: 5,
  regular: 10,
};

type Props = {
  renderControl: (controlClass: string) => React.Node,
  labelAlignment?: 'left' | 'right',
  children: React.Node,
  size?: 'large' | 'small' | 'regular',
  inline?: boolean,
};

const margin = {
  left: 'marginLeft',
  right: 'marginRight',
};
const genControlClass = ({ size, labelAlignment }) =>
  css({
    [margin[labelAlignment]]: MARGIN[size],
  });

const Label = styled(
  ({
    renderControl,
    labelAlignment = 'right',
    children,
    size = 'regular',
    inline,
    ...props
  }: Props) => (
    <label {...props}>
      {labelAlignment === 'left' && children}
      {renderControl &&
        renderControl(genControlClass({ labelAlignment, size }))}
      {labelAlignment === 'right' && children}
    </label>
  )
)`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  height: ${props => HEIGHT[props.size || 'regular']}px;
  align-items: center;
`;

// @component
export default Label;
