import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomListWrapper } from "./style";

const SectionList = memo((props) => {
  const { roomList = [], rowNum = 4 } = props;

  return (
    <RoomListWrapper>
      {roomList.slice(0, 8).map((item) => {
        return (
          <RoomItem
            key={item.id}
            roomInfo={item}
            itemWidth={100 / rowNum + "%"}
          />
        );
      })}
    </RoomListWrapper>
  );
});

SectionList.propTypes = {
  roomList: PropTypes.array,
  rowNum: PropTypes.number,
};

export default SectionList;
