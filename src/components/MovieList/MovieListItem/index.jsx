import { CardContent } from './MovieListItem.styled';

export default function MovieListItem({ title, date, description }) {
  return (
    <CardContent>
      <p>{title.slice(0, 20)}</p>
    </CardContent>
  );
}
