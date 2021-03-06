/**
 * Copyright (c) Quid, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @flow
import * as React from 'react';
import styled from '@emotion/styled/macro';
import InputText, { Input, PADDING } from '../InputText';

const TextArea = styled(props => <InputText as="textarea" {...props} />)`
  ${Input} {
    padding: ${props => PADDING[props.size] / 2.5}px
      ${props => PADDING[props.size]}px;
  }
`;
TextArea.defaultProps = {
  size: 'regular',
};

// @component
export default TextArea;
