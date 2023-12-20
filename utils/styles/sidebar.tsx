import styled from "styled-components";

interface Sample {
  right: string;
}

const SidebarStyled = styled.div<Sample>`
  position: absolute;
  right: ${({ right }) => right};
  width: 100%;
  padding: 24px 16px;
  box-sizing: border-box;
  transition: all 1s ease-in-out;
  background: var(--surface-default, #fff);
  height: 100vh;
  top: 0;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 5;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default SidebarStyled;
