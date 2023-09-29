import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'layout/Header';
import Footer from 'layout/Footer';

export default function SharedLayout() {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
}
