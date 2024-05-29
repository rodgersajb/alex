import { IoListSharp } from "react-icons/io5";
import { FaSearch, FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import styled from "styled-components";

export const Aside = () => {
  return (
    
      <Nav>
        <Button>
          <RxHamburgerMenu />
        </Button>
        <List>
          <li>
            <FaHome />
          </li>
          <li>
            <FaSearch />
          </li>
          <li>
            <IoListSharp />
          </li>
        </List>
      </Nav>
    
  );
};


const Nav = styled.nav`
  
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Button = styled.button`

  outline: none;
  cursor: pointer;
  border: none;
  background: blue;
  font-size: 1.6rem;
  color: #fcfcfc;
  padding: 1rem;
  `

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  transform: translateY(50%);
  gap: 1rem;
  font-size: 1.6rem;
  color: blue;
`;
