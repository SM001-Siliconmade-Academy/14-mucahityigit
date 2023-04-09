import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const initialState = {
  screens: [],
  status: "idle",
  error: null,
};

const dataRef = collection(db, "welcomeScreen");

export const getWelcomeScreens = createAsyncThunk(
  "welcome/getWelcomeScreens",
  async () => {
    const querySnapshot = await getDocs(dataRef);
    const dataArray = querySnapshot.docs.map((doc) => doc.data());
    return dataArray;
  }
);

export const postWelcomeScreen = createAsyncThunk(
  "welcome/postWelcomeScreen",
  async (data) => {
    const docRef = await addDoc(dataRef, data);
    const doc = await getDoc(docRef);
    return doc.data();
  }
);

const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    addWelcomeScreen: (state, action) => {
      console.log(action.payload);
      state.screens.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWelcomeScreens.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWelcomeScreens.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.screens = action.payload;
      })
      .addCase(getWelcomeScreens.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder.addCase(postWelcomeScreen.fulfilled, (state, action) => {
      state.screens.push(action.payload);
    });
    builder.addCase(postWelcomeScreen.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const selectWelcomeScreens = (state) => state.welcome.screens;
export const selectWelcomeStatus = (state) => state.welcome.status;
export const selectWelcomeError = (state) => state.welcome.error;

export const { addWelcomeScreen } = welcomeSlice.actions;
export default welcomeSlice.reducer;
