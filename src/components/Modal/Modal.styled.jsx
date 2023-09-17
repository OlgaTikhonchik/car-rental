import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 100%;
  z-index: 100;
  overflow-y: auto;
  max-height: 80vh;
  border-radius: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
export const Content = styled.div`
  position: relative;
  width: 461px;
  background-color: white;
  border-radius: 24px;
  padding: 10px;
`;
export const ButtonClose = styled.button`
  position: absolute;
  color: black;
  top: -12px;
  right: 0px;
  background-color: transparent;
  width: 10px;
  height: 10px;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled(MdClose)`
  display: block;
  color: #121417;
  width: 24px;
  height: 24px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;
export const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 24px;
`;
export const CarInfo = styled.ul`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const Text = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 18px;
  line-height: 24px;
`;

export const ModelBlue = styled.p`
  color: #3470ff;
  font-size: 16px;
`;
export const InfoDetal = styled.ul`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);
  font-weight: 400;
  line-height: 18px;
  gap: 3px;
  margin-bottom: 14px;
`;

export const CarText = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;
  &:last-child {
    border-right: none;
  }
`;
export const Descriprion = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const Accessories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const AccTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const AccList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);
  font-weight: 400;
  line-height: 18px;
  gap: 3px;
`;

export const AccItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;

   &:last-child {
    border-right: none;
`;

export const RentalContainer = styled.div`
  padding: 0;
  margin: 0;
`;

export const RentalTitle = styled.p`
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalList = styled.ul`
  width: 461px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentalItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  & span {
    color: #3470ff;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;

export const RentalButton = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #0b44cd;
  }
`;
