import React, { PropsWithChildren } from 'react';
import * as Style from './lineRooteLayoutStyle';

const LineRooteLayout = ({ children }: PropsWithChildren) => {
  return <Style.LineRootWrapper>{children}</Style.LineRootWrapper>;
};

export default LineRooteLayout;
