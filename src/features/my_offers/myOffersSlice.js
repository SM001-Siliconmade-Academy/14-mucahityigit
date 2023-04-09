import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const dataRef = collection(db, "myOffers");

export const getMyOffersData = createAsyncThunk(
  "myOffers/getMyOffersData",
  async () => {
    const querySnapshot = await getDocs(dataRef);
    const dataArray = querySnapshot.docs.map((doc) => doc.data());
    return dataArray;
  }
);

const myOffersSlice = createSlice({
  name: "myOffers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyOffersData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMyOffersData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getMyOffersData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectMyOffersData = (state) => state.myOffers.data;
export const selectMyOffersStatus = (state) => state.myOffers.status;
export const selectMyOffersError = (state) => state.myOffers.error;

export default myOffersSlice.reducer;
