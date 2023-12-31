import styled from "styled-components";

interface Sample {
  page?: string;
  bg: string;
}

const HeroStyled = styled.div<Sample>`
  display: flex;
  flex-direction: column;
  gap: 141px;
  height: ${({ page }) => (page === "home" ? "1024px" : "892px")};
  width: 100%;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    height: fit-content;
    gap: 96px;
    padding-bottom: 90px;
  }
`;

export default HeroStyled;
