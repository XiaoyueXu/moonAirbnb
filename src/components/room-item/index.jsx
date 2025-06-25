import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { roomInfo } = props;

  return (
    <RoomItemWrapper>
      <div className="room-item">
        <div className="room-image-outer">
          <div className="room-image-inner">
            <img src={roomInfo.picture_url} />
          </div>
        </div>
        <div className="message">
          {roomInfo?.verify_info?.messages?.join("·")}
        </div>
        <div className="message">{roomInfo?.name}</div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  roomInfo: PropTypes.object,
};

export default RoomItem;
