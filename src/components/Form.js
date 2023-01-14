import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/icon-search.svg";

function Form({ handleSubmit, error, darkMode }) {
  return (
    <StyledForm onSubmit={handleSubmit} darkMode={darkMode}>

      <div>
        <img src={searchIcon} alt="" />
        <input
          type="text"
          name="username"
          placeholder="Search GitHub username…"
          autoComplete="off"
        />
      </div>

      <div>
        {error && <p>No result</p>}
        <button type="submit">Search</button>
      </div>
      
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  height: 69px;
  margin-top: 35px;
  background: ${(props) => (props.darkMode ? "#1E2A47" : "#FEFEFE")};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 375px) {
    height: 60px;
  }

  div {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 100%;

    :first-child {
      width: 65%;
    }

    img {
      margin: 0 27px 0 32px;
      @media (max-width: 375px) {
        margin: 0 11px 0 16px;
        width: 20px;
        height: 20px;
      }
    }

    input {
      background: none;
      border: none;
      width: 100%;
      height: 70%;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: ${(props) => (props.darkMode ? "#FFFFFF" : "#222731")};
      @media (max-width: 375px) {
          font-size: 13px;
        }
      ::placeholder{
        color: ${(props) => (props.darkMode ? "#FFFFFF" : "#4B6A9B")};
      }
      :focus{
        outline: none;
      }
    }
    

    p {
      font-weight: 700;
      font-size: 15px;
      line-height: 22px;
      color: #f74646;
    }

    button {
      width: 106px;
      height: 50px;
      margin: 10px 10px 10px 24px;
      background: #0079ff;
      border-radius: 10px;
      border: none;
      font-size: 16px;
      color: #FFFFFF;
      cursor: pointer;
      @media (max-width: 375px) {
        width: 84px;
        height: 46px;
        margin: 7px;
        font-size: 14px;
      }
    }
  }
`;
export default Form;
