import styled, { css } from 'styled-components';

const ButtonGroup = styled.div`
  ${() => {
    return css`
      display: flex;
      gap: 10px;
    `;
  }}
`;

export { ButtonGroup };
