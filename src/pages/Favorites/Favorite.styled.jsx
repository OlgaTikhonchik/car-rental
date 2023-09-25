import styled from '@emotion/styled';

export const Text = styled.p`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 700;
  color: #523825;

  :hover {
    color: #815738;
  }
`;

export const Images = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
export const CatalogItem = styled.div`
  padding: 0;
  margin: 0;
`;
export const FavoriteList = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
  gap: 29px;
  flex-wrap: wrap;
  margin-top: 50px;
  flex-direction: row;
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
  margin-top: 20px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #0b44cd;
  }
`;
