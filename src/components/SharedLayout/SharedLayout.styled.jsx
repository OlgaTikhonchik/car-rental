import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerLayout = styled.div`
  border-radius: 6px;
  padding: 10px;
  width: 100%;
  max-width: 1440px;
`;

export const Header = styled.header`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  border-bottom: 2px solid #815738;
  padding: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const NavLinkStyled = styled(NavLink)`
  color: #523825;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;

  :hover {
    color: #815738;
  }
`;
