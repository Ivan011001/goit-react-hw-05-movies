import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'layout/Header';
import { Container } from './SharedLayout.styled';
import Fallback from 'components/Fallback';

export default function SharedLayout() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<Fallback />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
}
