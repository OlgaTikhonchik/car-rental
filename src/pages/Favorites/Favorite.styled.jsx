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
