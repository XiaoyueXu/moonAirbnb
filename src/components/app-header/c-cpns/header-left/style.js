import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  .logo {
    color: ${props => props.theme.color.primaryColor};
    cursor: pointer;
  }
`;
