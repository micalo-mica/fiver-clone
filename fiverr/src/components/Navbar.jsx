import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
// import { useGlobalContext } from "../context/HeaderContext";
import { useGlobalContext } from "../context/HeaderContext";

const N = styled.div`
  /* height: ${(prop) => (prop.type === "big" ? "21.2rem" : "21.5rem")};
  width: ${(prop) => (prop.type === "big" ? "19.9rem" : "21.9rem")}; */
  background-color: ${({ theme }) => theme.colors.hero};
  /* color: ${({ theme }) => theme.colors.black}; */
  /* -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38); */
  padding: 0.7rem 0rem;
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
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
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.3rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
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

const Logo = styled.div``;
const LogoText = styled.h1``;

// center
const Center = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const ListItems = styled.ul`
  display: flex;
  gap: 0.7rem;
  font-weight: 500;

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
const ListItem = styled.li`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const LinkButton = styled.button`
  height: 100%;
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  width: 10rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

// right
const RightLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const LinkT = styled.li`
  font-size: 1.3rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    font-size: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const JoinBtn = styled.button`
  color: white;
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    padding: 0.3rem 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const ToggleContainer = styled.div`
  color: white;
  background-color: #1dbf73;
  padding: 0.4rem 0.3rem;
  border-radius: 0.3rem;
  border: 1px solid white;
  font-size: 1rem;
  cursor: pointer;
  display: none;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    display: flex;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 1;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <N onMouseOver={handleSubmenu}>
      <NavbarContainer>
        <Logo>
          <LogoText>Fiver-clone</LogoText>
        </Logo>
        <Center>
          <ListItems>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                house for rent
              </LinkButton>
            </ListItem>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                house for sell
              </LinkButton>
            </ListItem>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                company
              </LinkButton>
            </ListItem>
          </ListItems>
        </Center>
        <RightLinks>
          <LinkT>sell</LinkT>
          <LinkT>profile</LinkT>
          <JoinBtn>join</JoinBtn>
          <ToggleContainer onClick={openSidebar}>
            <AiOutlineMenu />
          </ToggleContainer>
        </RightLinks>
      </NavbarContainer>
    </N>
  );
}

export default Navbar;
