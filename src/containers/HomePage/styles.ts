import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  padding: ${({ theme }) => theme.spacings.medium} 0;
`;
