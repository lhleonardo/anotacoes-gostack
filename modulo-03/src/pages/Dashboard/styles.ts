import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-top: 100px;
  width: 500px;
  font-size: 48px;
  line-height: 56px;

  color: #3a3a3a;
`;

export const Form = styled.form`
  margin-top: 40px;

  display: flex;
  flex-direction: row;

  input {
    flex: 1;

    height: 70px;
    border: none;
    padding: 20px;
    color: #3a3a3a;
    background-color: white;

    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      color: #999;
    }
  }

  button {
    width: 20%;
    height: 70px;

    border: none;
    background-color: #04d361;
    border-radius: 0px 5px 5px 0px;
    color: white;

    font-weight: bold;

    &:hover {
      background-color: ${shade(0.2, '#04D361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;

  width: 100%;
  height: 300px;
`;

export const Repository = styled.a`
  display: flex;

  background-color: white;
  border-radius: 5px;
  padding: 15px;

  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(15px);
  }

  & + a {
    margin-top: 20px;
  }

  img {
    height: 100px;
    margin-left: 10px;
    border-radius: 50%;
  }

  div.info {
    flex: 1;
    margin-left: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    strong.repo-title {
      font-size: 24px;
      color: #3d3d3d;
      line-height: 28px;
    }

    p.repo-description {
      font-size: 16px;
      color: #a8a8b3;
      margin-top: 5px;
      font-weight: normal;
    }
  }

  svg {
    color: #cbcbd6;

    align-self: center;
  }
`;
