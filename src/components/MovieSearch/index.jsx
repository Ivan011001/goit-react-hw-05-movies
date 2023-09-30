import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './MovieSearch.styled';
import { IoSearchOutline } from 'react-icons/io5';

export default function MovieSearch({ onSubmit }) {
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const movie = form.elements.movie.value;
    onSubmit(movie.trim());
    form.reset();
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>
      <SearchFormInput type="text" name="movie" />
      <SearchFormButton>
        <IoSearchOutline />
      </SearchFormButton>
    </SearchForm>
  );
}
