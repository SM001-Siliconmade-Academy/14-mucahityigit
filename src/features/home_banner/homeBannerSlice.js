import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const dataRef = collection(db, "banners");

export const getHomeBannerData = createAsyncThunk(
  "homeBanner/getHomeBannerData",
  async () => {
    const querySnapshot = await getDocs(dataRef);
    const dataArray = querySnapshot.docs.map((doc) => doc.data());
    return dataArray;
  }
);

const homeBannerSlice = createSlice({
  name: "homeBanner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomeBannerData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHomeBannerData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getHomeBannerData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectHomeBannerData = (state) => state.homeBanner.data;
export const selectHomeBannerStatus = (state) => state.homeBanner.status;
export const selectHomeBannerError = (state) => state.homeBanner.error;

export default homeBannerSlice.reducer;
