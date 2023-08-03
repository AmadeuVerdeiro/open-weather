import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WeatherState = {
  details: any;
};

const initialState: WeatherState = {
  details: [],
};

const weather_store = createSlice({
  name: "weather_store",
  initialState,
  reducers: {
    setWeatherDetails(state, action: PayloadAction<any>) {
      state.details = action.payload;
    },
  },
});

export const {
  setWeatherDetails,
} = weather_store.actions;
export default weather_store.reducer;
