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
import SectionHeader from "@/components/section-header";
import SectionList from "@/components/section-list";

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
      <HomeBanner />
      <div className="content">
        {/* 高性价比房源 */}
        <div className="good-price">
          <SectionHeader
            title={goodPriceInfo.title}
            subTitle={goodPriceInfo.subTitle}
          ></SectionHeader>
        </div>
        {goodPriceInfo?.list && (
          <SectionList roomList={goodPriceInfo.list.slice(0, 8)} />
        )}

        {/* 高评分房源 */}
        <div className="high-score">
          <SectionHeader
            title={highScoreInfo?.title}
            subTitle={highScoreInfo?.subtitle}
          />
        </div>
        {highScoreInfo?.list && (
          <SectionList roomList={highScoreInfo.list.slice(0, 8)} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
