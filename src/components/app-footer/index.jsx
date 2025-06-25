import React, { memo } from "react";
import { FootWrapper } from "./style";
import footData from "@/assets/data/footer.json";

const AppFooter = memo(() => {
  return (
    <FootWrapper>
      <div className="wrapper">
        {footData.map((item) => {
          return (
            <div className="foot-item">
              <div className="foot-title">{item.name}</div>
              <div className="foot-list-item">
                {item.list.map((listItem) => {
                  return <div className="list-item-title">{listItem}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="statement">
        © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
        全国旅游投诉渠道 12301
      </div>
    </FootWrapper>
  );
});

export default AppFooter;
