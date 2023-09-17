import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  padding: 20px;
  color: #824113;
  text-align: center;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  text-transform: uppercase;

  :hover,
  :focus {
    color: #d38146;
  }
`;

export const Text = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  padding: 20px;
  color: #824113;
  text-align: center;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  margin-bottom: 30px;

  :hover,
  :focus {
    color: #d38146;
  }
`;

export const Images = styled.img`
  display: block;
  width: 100%;
  border-radius: 20px;
`;
