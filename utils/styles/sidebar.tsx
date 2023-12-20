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
  display: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default SidebarStyled;
