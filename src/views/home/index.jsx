// 从第三方库中引入
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// 从项目中引入
import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner/HomeBanner";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const Home = memo(() => {
  const dispatch = useDispatch();
  const goodPriceInfo = useSelector(
    (state) => state?.home?.goodPriceInfo,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader
            title={goodPriceInfo.title}
            subTitle={goodPriceInfo.subTitle}
          ></SectionHeader>
        </div>
        <div className="room-item-list">
          {goodPriceInfo?.list &&
            goodPriceInfo.list.slice(0, 8).map((item) => {
              return <RoomItem key={item.id} roomInfo={item} itemWidth={'25%'} />;
            })}
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
