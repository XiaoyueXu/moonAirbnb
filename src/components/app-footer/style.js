import styled from "styled-components";

export const FootWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  border-top: 1px solid #ebebeb;
  .wrapper {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    padding: 48px 24px;
  }
  .foot-item {
    flex: 1;
    .foot-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .list-item-title {
      font-size: 14px;
      margin-top: 6px;
      color: #767676;
      cursor: pointer;
    }
  }
  .statement {
    color: #767676;
    font-size: 14px;
    margin-top: 30px;
    padding: 20px;
    text-align: center;
    border-top: 1px solid #ebebeb;
  }
`;
