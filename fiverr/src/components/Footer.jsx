import styled from "styled-components";

const F = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Footer() {
  return (
    <F>
      <FContainer>
        <Top></Top>
        <Bottom> </Bottom>
      </FContainer>
    </F>
  );
}

export default Footer;
