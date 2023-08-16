import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import newRequest from "../helper/newRequest";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
`;
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue3};
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.h2`
  align-self: center;
  color: ${({ theme }) => theme.colors.orange};
`;
const Tittle = styled.h4`
  font-size: 1rem;
  font-weight: 300;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  border: none;
  padding: 0.5rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.3rem;
`;

function ActivateUser() {
  const [token, setToken] = useState("");

  const activateUser = async () => {
    try {
      const res = await newRequest.post("register/activate-user", {
        token,
      });
      // toast(res.data.msg, {
      //   className: "toast-success",
      //   bodyClassName: "toast-success",
      // });
    } catch (error) {
      console.log(error);
      // toast(error.response.data.msg, {
      //   className: "toast-failed",
      //   bodyClassName: "toast-failed",
      // });
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    // check token
    if (token) {
      activateUser();
    }
  }, [token]);

  return (
    <Container>
      <Wrapper>
        <Logo>Fiver-clone</Logo>
        <Tittle>Click the button below to login in</Tittle>
        <Link to="/login">
          <Button type="submit">Login in</Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default ActivateUser;
