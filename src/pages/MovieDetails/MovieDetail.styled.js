import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBack = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  font-size: 28px;
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const MoreInfoLink = styled(NavLink)`
  color: #050505;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;
