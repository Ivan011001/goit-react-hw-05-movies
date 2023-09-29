import { StyledLink } from './Header.styled';

export default function Header() {
  return (
    <header>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </header>
  );
}
