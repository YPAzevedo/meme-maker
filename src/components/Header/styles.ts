import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: ${props => props.theme.colors.header};

  > img {
    height: 70px;
  }
`;
