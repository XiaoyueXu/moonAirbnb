import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 异步action
export const fetchHomeDataAction = createAsyncThunk(
  "home/goodPriceRequest", //唯一标识符（命名空间）
  async (payload) => {
    const res = await getHomeGoodPriceData();
    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}, //性价比房源数据
  },
  reducers: {
    changeGoodPriceInfoAction: (state, payload) => {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: (builder) => {
    // 在这里处理异步action返回的数据
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   console.log(state);
    //   state.goodPriceInfo = payload;
    // },

    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload;
    })
  },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;
export default homeSlice.reducer;
