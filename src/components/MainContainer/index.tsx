import React, { ReactNode } from 'react';
import * as Styled from './styles';

export type MainContainerProps = {
  children: ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
