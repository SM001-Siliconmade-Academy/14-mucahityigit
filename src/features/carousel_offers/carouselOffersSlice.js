import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const dataRef = collection(db, "carouselOffers");

export const getCarouselOffersData = createAsyncThunk(
  "carouselOffers/getCarouselData",
  async () => {
    const querySnapshot = await getDocs(dataRef);
    const dataArray = querySnapshot.docs.map((doc) => doc.data());
    return dataArray;
  }
);

const carouselOffersSlice = createSlice({
  name: "carouselOffers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarouselOffersData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCarouselOffersData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getCarouselOffersData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectCarouselOffersData = (state) => state.carouselOffers.data;
export const selectCarouselOffersStatus = (state) =>
  state.carouselOffers.status;
export const selectCarouselOffersError = (state) => state.carouselOffers.error;

export default carouselOffersSlice.reducer;
