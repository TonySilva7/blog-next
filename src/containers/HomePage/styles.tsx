import styled from 'styled-components';

export const Container = styled.section`
  border: solid 1px gray;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;
