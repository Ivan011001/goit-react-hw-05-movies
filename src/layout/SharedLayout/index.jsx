import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'layout/Header';
import { Container } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
}
