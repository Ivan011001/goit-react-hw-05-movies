import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #050505;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;
