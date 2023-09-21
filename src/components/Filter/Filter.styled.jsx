import styled from '@emotion/styled';
// import { FiChevronDown } from 'react-icons/fi';
// import { FiChevronUp } from 'react-icons/fi';

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #523825;
  margin-bottom: 8px;
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-start;
  justify-content: center;
`;

export const Select = styled.select`
  border: none;
  border-radius: 14px;
  background-color: #f7f7fb;
  width: 125px;
  padding: 14px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  color: #121417;
  cursor: pointer;
  // appearance: none; -убираем стандартную стрелку
  // overflow: hidden;
`;
export const Option = styled.option`
  font-size: 18px;
  font-weight: 500;
  color: #121417;
`;

export const SelectBrand = styled(Select)`
  width: 224px;
  .react-select__indicator {
    transform: rotate(180deg);
  }
`;

// export const ArrowDown = styled(FiChevronDown)`
//   width: 20px;
//   height: 20px;
//   margin: 0;
//   color: #000000;
// `;

// export const ArrowUp = styled(FiChevronUp)`
//   width: 20px;
//   height: 20px;
//   margin: 0;

//   color: #000000;
// `;

export const FormBrand = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  //   gap: 18px;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-start;
  justify-content: center;
`;
export const Saidbar = styled.div`
  display: flex;
  gap: 18px;
`;
export const FormMileage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const MileageInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MileageInputLeft = styled.input`
  display: flex;
  width: 160px;
  padding: 14px 10px 16px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  &::placeholder {
    color: #121417;
  }
`;

export const MileageInputRight = styled.input`
  display: flex;
  width: 160px;
  padding: 14px 10px 16px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;

  &::placeholder {
    color: #121417;
  }
`;

export const Button = styled.button`
  width: 136px;
  max-height: 48px;
  margin-top: 25px;
  padding: 5px 20px;
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
  //   margin-top: 18px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #0b44cd;
  }
`;
