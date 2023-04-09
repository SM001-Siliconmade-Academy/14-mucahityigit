import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const initialState = {
  data: [],
};

const dataRef = collection(db, "users");

export const getUsersData = createAsyncThunk("users/getUsersData", async () => {
  const querySnapshot = await getDocs(dataRef);
  const dataArray = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      createdAt: data.createdAt.toMillis(),
    };
  });
  return dataArray;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const selectUsersData = (state) => state.users.data;

export default usersSlice.reducer;
