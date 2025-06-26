import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { roomInfo } = props;

  return (
    <RoomItemWrapper verifyColor={roomInfo?.verify_info?.text_color || "#39576a"}>
      <div className="room-item">
        <div className="room-image-outer">
          <div className="room-image-inner">
            <img src={roomInfo.picture_url} />
          </div>
        </div>
        <div className="message">
          {roomInfo?.verify_info?.messages?.join("·")}
        </div>
        <div className="name">{roomInfo?.name}</div>
        <div className="price">{roomInfo?.price_format + '/晚'}</div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  roomInfo: PropTypes.object,
};

export default RoomItem;
