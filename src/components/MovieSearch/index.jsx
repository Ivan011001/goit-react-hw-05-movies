export default function MovieSearch({ onSubmit }) {
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const movie = form.elements.movie.value;
    onSubmit(movie.trim());
    form.reset();
  };

  return (
    <div onSubmit={onFormSubmit}>
      <form>
        <input type="text" name="movie" />
        <button>Search</button>
      </form>
    </div>
  );
}
