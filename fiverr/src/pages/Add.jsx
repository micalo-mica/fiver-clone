import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import Pro from "../assets/pro.png";
import { categoryForInput } from "../static/categoryD";

const A = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
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
const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthLgPhone};
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const PageTitles = styled.h2`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Sections = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Left = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
    row-gap: 0.2rem;
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 0.5rem;
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

const Input = styled.input`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2.5rem;
  width: 25rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  display: ${(prop) => prop.dis};
  &:focus {
    outline: none;
  }
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
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
  }
`;

const Select = styled.select`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2rem;
  width: 25rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  &:focus {
    outline: none;
  }
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
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
  }
`;

const Option = styled.option``;

// right
const Right = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function Add() {
  return (
    <A>
      <Container>
        <PageTitles>Add New Gig</PageTitles>
        <Sections>
          <Left>
            <InputContainer>
              <Label>Lodge Name</Label>
              <Input type="text" name="name" placeholder="lodge name" />
            </InputContainer>
            <InputContainer>
              <Label>Category</Label>
              <Select>
                <Option value="Choose a category">Choose a category</Option>
                {categoryForInput &&
                  categoryForInput.map((c) => {
                    return (
                      <Option key={c.id} value={c.cat}>
                        {c.cat}
                      </Option>
                    );
                  })}
              </Select>
            </InputContainer>
          </Left>
          <Right></Right>
        </Sections>
      </Container>
    </A>
  );
}

export default Add;
