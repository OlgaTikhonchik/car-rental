import styled from '@emotion/styled';
import { HiHeart } from 'react-icons/hi';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px 15px;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: #523825;
  &:hover {
    color: #d38146;
  }
`;

export const HeartIcon = styled(HiHeart)`
  display: block;
  color: #3470ff;
  width: 40px;
  height: 40px;
  &:hover {
    color: #0b44cd;
    scale: 1.3;
  }
`;
