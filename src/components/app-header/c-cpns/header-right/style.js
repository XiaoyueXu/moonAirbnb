import styled from "styled-components";

export const RightWrapper = styled.div`
  color: #484848;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .action-icon {
    font-size: 14px;
    height: 18px;
    padding: 12px 15px;
    cursor: pointer;
    border-radius: 22px;
    font-weight: 600;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .login-in-wrapper {
    width: 75px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 25px;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    }
  }
  .icon {
    padding: 12px 15px;
    cursor: pointer;
    border-radius: 22px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const LoginModalWrapper = styled.div`
  width: 240px;
  height: 240px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 25px;
  position: absolute;
  top: 66px;
  right: 15px;
  padding-top: 15px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
  .item {
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .line {
    border-top: 1px solid #ccc;
    margin: 10px 0px;
  }
`;
