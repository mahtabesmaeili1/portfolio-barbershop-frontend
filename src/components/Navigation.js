import styled from "styled-components";
import { HashLink as Liink } from "react-router-hash-link";
import "./service.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import "../App.css";
export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const employee = useSelector(selectUser);
  return (
    <Nav>
      <Logo className="blink_me" href="/">
        [ THE MENS ROOM ]
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu open={open}>
        <Liink className="hover-underline-animation" to="/">
          Home
        </Liink>

        <Liink className="hover-underline-animation" smooth to="/#service">
          Treatments
        </Liink>

        <Liink className="hover-underline-animation" to="/makeappointment">
          <span className="light">Book Now</span>
        </Liink>
        <Liink className="hover-underline-animation" to="/#contact">
          Contact
        </Liink>
        {employee && employee.isEmployee ? (
          <Liink className="hover-underline-animation" to="/appointment">
            see the reservations
          </Liink>
        ) : (
          ""
        )}
        {token ? (
          <button
            style={{ background: "black", color: "white", boxShadow: "0" }}
            onClick={() => dispatch(logOut())}
          >
            Logout
          </button>
        ) : (
          <Liink className="hover-underline-animation" to="/login">
            Login
          </Liink>
        )}
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: black;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #ececec;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media (max-width: 780px) {
    font-size: 14px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #ececec;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
