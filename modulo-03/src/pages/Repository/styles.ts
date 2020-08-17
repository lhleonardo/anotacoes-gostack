import styled from 'styled-components';

import { shade } from 'polished';

export const Header = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: ${shade(0.4, '#a8a8b3')};
    }

    color: #a8a8b3;
    text-decoration: none;

    font-size: 18px;
    line-height: 19px;
    font-weight: bold;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-top: 100px;

  img {
    height: 130px;
    border-radius: 50%;
  }

  div.description {
    margin-left: 30px;

    strong {
      display: block;
      font-size: 36px;
      line-height: 42px;
      color: #3d3d4d;
    }

    span {
      font-size: 20px;
      line-height: 23px;

      color: #737380;
    }
  }
`;

export const Statistics = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
`;

export const Statistic = styled.div`
  strong {
    display: block;
    font-size: 36px;
    line-height: 42px;

    color: #3d3d4d;
  }

  span {
    font-size: 20px;
    line-height: 23px;

    color: #6c6c80;
  }

  & + div {
    margin-left: 80px;
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  width: 100%;
`;

export const Issue = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 120px;
  background-color: white;
  padding: 24px;

  text-decoration: none;

  border-radius: 5px;

  transition: transform 0.2s;

  &:hover {
    transform: translateX(30px);
  }

  & + a {
    margin-top: 10px;
  }

  div.info {
    strong {
      display: block;
      font-size: 24px;
      line-height: 28px;

      color: #3d3d4d;

      max-width: 95%;
    }

    span {
      margin-top: 8px;
      font-size: 18px;
      line-height: 21px;

      color: #a8a8b3;
    }
  }
`;
