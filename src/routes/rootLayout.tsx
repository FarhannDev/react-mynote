import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <main className="main-content">
        <Container className="main-content-container">
          <Outlet />
        </Container>
      </main>
    </>
  );
}
