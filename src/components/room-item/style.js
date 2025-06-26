import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: 25%;
  .room-item {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-left: -8px;
    .message {
      font-size: 12px;
      font-weight: 700;
      color: #39576a;
      margin: 10px 0 5px;
    }
    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .price {
      margin: 8px 0;
    }
  }
  .room-image-outer {
    width: 100%;
    height: 148px;
    position: relative;
  }
  .room-image-inner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
