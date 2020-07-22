import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #d6d7e6;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  background: #f9fafb;
  border-radius: 5px;
  padding: 20px;
  min-width: 35%;
  min-height: 30%;
  margin: 10px;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 600px) {
    width: 80%;
  }

  h1 {
    color: #333;
    text-align: center;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      input {
        outline: 0;
        border-width: 0 0 2px;
        border-color: #e7ebee;
        padding: 10px;
        margin-bottom: 10px;
        width: 80%;
        margin: 10px;

        &:focus {
          border-color: #5333ca;
        }
      }

      select {
        outline: 0;
        border-width: 2px;
        border-color: #e7ebee;
        padding: 10px;
        margin-bottom: 10px;
        width: 80%;
        margin: 10px;

        &:focus {
          border-color: #5333ca;
        }
      }

      span {
        color: var(--error);
        font-size: 16px;
      }
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    background: #5333ca;
    border-radius: 15px;
    outline: none;
    border: 0;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    width: 30%;
    text-align: center;

    &:hover {
      background: ${darken(0.6, '#5333ca')};
    }
  }

  a {
    color: #e7ebee;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const BillContainer = styled.div`
  background: #5333ca;
  border-radius: 5px;
  padding: 20px;
  min-width: 20%;
  min-height: 30%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);

  h1 {
    color: #ffcd49;
  }

  p {
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    margin: 10px;
  }

  span {
    color: #fff;
    font-size: 16px;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
