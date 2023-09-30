import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;
export const MovieCard = styled.li`
  background-image: ${props => {
    if (!props.$image) {
      return 'url("https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg")';
    }
    return `url("https://image.tmdb.org/t/p/w200${props.$image}")`;
  }};

  background-size: cover;
  background-position: center;
  border-radius: 17px;
  width: 200px;
  height: 350px;
  padding: 20px;
  transition: transform 300ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;
