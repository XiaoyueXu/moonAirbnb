import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/** 写法一：异步action TODO: 推荐这样做，但是这样做的代码量比较大 */
// // 获取高性价比房源
// export const fetchGoodPriceAction = createAsyncThunk(
//   "home/goodPriceRequest", //唯一标识符（命名空间）
//   async (payload) => {
//     const res = await getHomeGoodPriceData();
//     return res;
//   }
// );
// // 获取高评分房源
// export const fetchHighScoreAction = createAsyncThunk(
//   "home/highScoreRequest",
//   async (payload) => {
//     const res = await getHomeHighScoreData();
//     return res;
//   }
// );

/** 写法二：两个异步请求的方法写在一个方法中 */
export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, store) => {
    const { dispatch } = store;
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res)); //将接口返回的高性价比数据更新至store
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res)); //将接口返回的高评分数据更新至store
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res)); //将接口返回的折扣数据更新至store
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}, //性价比房源数据
    highScoreInfo: {}, //高评分房源数据
    discountInfo: {}, //折扣数据
  },
  reducers: {
    // 子组件必须通过action来更新redux中的数据
    changeGoodPriceInfoAction: (state, { payload }) => {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction: (state, { payload }) => {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction: (state, { payload }) => {
      console.log("discount: ", payload);
      
      state.discountInfo = payload;
    },
  },
  extraReducers: (builder) => {
    // TODO: 老版本的写法
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   console.log(state);
    //   state.goodPriceInfo = payload;
    // },
    // // 写法一：在这里处理异步action返回的数据
    // builder.addCase(fetchGoodPriceAction.fulfilled, (state, { payload }) => {
    //   state.goodPriceInfo = payload;
    // });
    // builder.addCase(fetchHighScoreAction.fulfilled, (state, { payload }) => {
    //   state.highScoreInfo = payload;
    // });
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
