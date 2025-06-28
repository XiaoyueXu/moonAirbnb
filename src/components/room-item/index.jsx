import PropTypes from "prop-types";
import React, { memo } from "react";
import Rating from "@mui/material/Rating";

import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { roomInfo } = props;

  const setRate = (event, newValue) => {
    console.log(newValue);
  };

  return (
    <RoomItemWrapper
      verifyColor={roomInfo?.verify_info?.text_color || "#39576a"}
    >
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
        <div className="price">{roomInfo?.price_format + "/晚"}</div>
        <div className="bottom-info">
          <Rating
            sx={{ fontSize: "14px", color: roomInfo.star_rating_color }}
            value={roomInfo.star_rating ?? 4}
            precision={0.1}
            readOnly
          />
          <span className="bottom-text">{roomInfo?.reviews_count}</span>
          {roomInfo?.bottom_info?.content && (
            <span
              className="content bottom-text"
              style={{
                color: roomInfo?.bottom_info?.content_color,
                fontSize: roomInfo?.bottom_info?.font_size + "px",
              }}
            >
              {"·" + roomInfo?.bottom_info?.content}
            </span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  roomInfo: PropTypes.object,
};

export default RoomItem;
