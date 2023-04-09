import { configureStore } from "@reduxjs/toolkit";
import welcomeReducer from "../features/welcome/welcomeSlice";
import carouselOffersReducer from "../features/carousel_offers/carouselOffersSlice";
import myOffersReducer from "../features/my_offers/myOffersSlice";
import homeBannerReducer from "../features/home_banner/homeBannerSlice";
import clickWinItemsReducer from "../features/click_win_items/clickWinItemsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    welcome: welcomeReducer,
    carouselOffers: carouselOffersReducer,
    myOffers: myOffersReducer,
    homeBanner: homeBannerReducer,
    clickWinItems: clickWinItemsReducer,
    users: usersReducer,
  },
});
