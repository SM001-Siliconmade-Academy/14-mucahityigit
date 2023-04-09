import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const dataRef = collection(db, "clickWinItems");

export const getClickWinItemsData = createAsyncThunk(
  "clickWinItems/getClickWinItemsData",
  async () => {
    const querySnapshot = await getDocs(dataRef);
    const dataArray = querySnapshot.docs.map((doc) => doc.data());
    return dataArray;
  }
);

const clickWinItemsSlice = createSlice({
  name: "clickWinItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClickWinItemsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getClickWinItemsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getClickWinItemsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectClickWinItemsData = (state) => state.clickWinItems.data;
export const selectClickWinItemsStatus = (state) => state.clickWinItems.status;
export const selectClickWinItemsError = (state) => state.clickWinItems.error;

export default clickWinItemsSlice.reducer;
