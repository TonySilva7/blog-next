import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  img {
    display: block;
    width: 100%;
    border-radius: 0.7rem;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `};
`;
