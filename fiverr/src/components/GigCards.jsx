import styled from "styled-components";
import GigCard from "./GigCard";
import { projects } from "../static/sli";

const G = styled.div`
  width: 100%;
  padding-top: 2rem;
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
const GContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
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

function GigCards() {
  return (
    <G>
      <GContainer>
        {projects && projects.map((g) => <GigCard key={g.id} g={g} />)}
      </GContainer>
    </G>
  );
}

export default GigCards;
