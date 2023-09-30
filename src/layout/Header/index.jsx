import { Link } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledLink } from './Header.styled';
import { BiCameraMovie } from 'react-icons/bi';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <BiCameraMovie size={30} />
      </Link>

      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}
