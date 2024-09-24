import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import TopNavigation from '../components/navbar/TopNavigation';

export default function RootLayout() {
  return (
    <>
      <TopNavigation />
      <Container className="app-layout-container">
        <Outlet />
      </Container>
    </>
  );
}
