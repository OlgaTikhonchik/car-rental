import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ContainerLayout,
  Header,
  Nav,
  NavLinkStyled,
} from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <ContainerLayout>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="/favorites">Favorires</NavLinkStyled>
        </Nav>
      </Header>
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </ContainerLayout>
  );
};

export default SharedLayout;
