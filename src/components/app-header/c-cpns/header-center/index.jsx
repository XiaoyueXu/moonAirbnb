import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <span className="text">搜索房源和体验</span>
        <div className="search-icon">
          <IconSearchBar></IconSearchBar>
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
