import styled from '@emotion/styled';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiHeart } from 'react-icons/hi';

export const Item = styled.div`
  width: 274px;
  min-height: 426px;
  display: flex;
  flex-direction: column;
`;
export const CarImgWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 14px;
`;

export const IconButton = styled.button`
  position: absolute;
  margin: 0;
  top: 16px;
  right: 16px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const HeartIcon = styled(HiOutlineHeart)`
  display: block;
  color: rgb(255 255 255 / 80%);
  width: 18px;
  height: 18px;
`;

export const HeartIconBlue = styled(HiHeart)`
  display: block;
  color: #3470ff;
  width: 18px;
  height: 18px;
`;
export const InfoCar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
`;
export const CarInfo = styled.ul`
  display: flex;
  width: 100%;
  gap: 5px;
`;
export const CarText = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
  margin-right: 5px;
`;
export const CarTextPrice = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
  margin-right: 5px;
`;

export const ModelBlue = styled.p`
  color: #3470ff;
  font-size: 16px;
  margin-left: 3px;
`;
export const Info = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  gap: 4px;
`;
export const TextInfo = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`;
export const Button = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: auto;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #0b44cd;
  }
`;
