import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: #050505;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;
