import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ContainerLayout,
  Header,
  Nav,
  NavLinkStyled,
} from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <ContainerLayout>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </ContainerLayout>
  );
};

export default SharedLayout;
