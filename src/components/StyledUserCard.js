import styled from "styled-components"

const StyledUserCard = styled.div`
  width: 100%;
  min-height: 420px;
  border-radius: 15px;
  margin-top: 24px;
  padding: 48px;
  background-color: ${(props) => (props.darkMode ? "#1E2A47" : "#FEFEFE")};
  display: flex;
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 375px) {
    padding: 24px;
  }
  .avatar {
    width: 117px;
    height: 117px;
    margin-right: 37px;
    border-radius: 50%;
    @media (max-width: 375px) {
      width: 70px;
      height: 70px;
    }
  }
  .header_of_user_info {
    width: 100%;
    display: flex;
    .names_wraper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media (max-width: 768px) {
        display: block;
      }
      div {
        h3 {
          font-weight: 700;
          font-size: 26px;
          line-height: 39px;
          color: ${(props) => (props.darkMode ? "#FFFFFF" : " #2B3442")};
          @media (max-width: 375px) {
            font-size: 16px;
            line-height: 23px;
          }
        }
        p {
          font-size: 16px;
          font-weight: 400;
          color: #0079ff;
          @media (max-width: 375px) {
            font-size: 13px;
          }
        }
      }
      .user_join_data {
        color: ${(props) => (props.darkMode ? "#FFFFFF" : " #697C9A")};
        font-size: 15px;
        margin-top: 8px;
        @media (max-width: 768px) {
          margin-top: 4px;
        }
        @media (max-width: 375px) {
          font-size: 13px;
        }
      }
    }
  }
  .user_main_info_container {
    margin-top: 20px;
    @media (max-width: 768px) {
      margin-top: 38px;
      margin-left: -155px;
    }
    @media (max-width: 375px) {
      margin-left: -105px;
    }
    article {
      display: flex;
      :first-child {
        font-size: 15px;
        font-weight: 400;
        color: ${(props) => (props.darkMode ? "#FFFFFF" : "#4B6A9B")};
      }
      :nth-child(2) {
        height: 85px;
        width: 480px;
        margin: 32px 0 37px 0;
        padding: 15px 83px 17px 32px;
        border-radius: 10px;
        justify-content: space-between;
        background-color: ${(props) =>
          props.darkMode ? "#141D2F" : "#F6F8FF"};
        @media (max-width: 768px) {
          width: 493px;
          margin: 32px 0 30px 0;
        }
        @media (max-width: 375px) {
          width: 279px;
          padding: 18px 14px 19px 15px;
          margin: 23px 0 24px 0;
        }

        h4 {
          font-weight: 400;
          font-size: 13px;
          color: ${(props) => (props.darkMode ? "#FFFFFF" : "#4B6A9B")};
          @media (max-width: 375px) {
            font-size: 11px;
          }
        }
        p {
          font-size: 22px;
          font-weight: 700;
          margin-top: 1px;
          color: ${(props) => (props.darkMode ? "#FFFFFF" : "#2B3442")};
          @media (max-width: 375px) {
            font-size: 16px;
            margin-top: 8px;
          }
        }
      }
      :last-child {
        display: flex;
        flex-wrap: wrap;
        color: ${(props) => (props.darkMode ? "#FFFFFF" : "#4B6A9B")};
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        @media (max-width: 375px) {
          display: block;
          font-size: 13px;
        }
        div {
          display: flex;
          width: 50%;
          margin-bottom: 19px;
          @media (max-width: 375px) {
            margin-bottom: 17px;
            width: 100%;
          }
          img {
            margin-right: 17px;
            color: ${(props) => (props.darkMode ? "#FFFFFF" : "#4B6A9B")};
          }
          a {
            text-decoration: none;
            color: ${(props) => (props.darkMode ? "#FFFFFF" : "#4B6A9B")};
          }
        }
      }
    }
  }

  .not_available {
    opacity: 0.5;
  }
`;

export default StyledUserCard;