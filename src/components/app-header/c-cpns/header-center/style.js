import styled from "styled-components";

export const CenterWrapper = styled.div`
  width: 300px;
  height: 48px;
  display: flex;
  justify-content: center;

  .search-bar {
    width: 100%;
    height: 48px;
    line-height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    }
  }
  .text {
    font-size: 14px;
    font-weight: 600;
    padding: 0px 18px;
  }
  .search-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #ff385c;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;
