// 从第三方库中引入
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// 从项目中引入
import {
  fetchHomeDataAction,
  // fetchGoodPriceAction,
  // fetchHighScoreAction,
} from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner/HomeBanner";
import SectionV1Wrapper from "./c-cpns/home-section-v1";

const Home = memo(() => {
  const dispatch = useDispatch();

  /** 激发异步事件：发送网络请求 */
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    // // 请求高性价比房源数据
    // dispatch(fetchGoodPriceAction());
    // // 请求高评分房源数据
    // dispatch(fetchHighScoreAction());
  }, [dispatch]);

  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state?.home?.goodPriceInfo,
      highScoreInfo: state?.home?.highScoreInfo,
    }),
    shallowEqual
  );
  // const goodPriceInfo = useSelector(
  //   (state) => state?.home?.goodPriceInfo,
  //   shallowEqual
  // );
  // const highScoreInfo = useSelector(
  //   (state) => state?.home?.highScoreInfo,
  //   shallowEqual
  // );

  return (
    <HomeWrapper>
      {/* 首页图片 */}
      <HomeBanner />
      <div className="content">
        {/* 高性价比房源 */}
        <SectionV1Wrapper sectionData={goodPriceInfo} />
        {/* 高评分房源 */}
        <SectionV1Wrapper sectionData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
