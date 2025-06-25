import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: 25%;
  .room-item {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-left: -8px;
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
