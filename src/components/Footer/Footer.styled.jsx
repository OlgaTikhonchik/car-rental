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
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

export const HeartIcon = styled(HiHeart)`
  display: block;
  color: #3470ff;
  width: 40px;
  height: 40px;
`;
