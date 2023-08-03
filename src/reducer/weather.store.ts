import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WeatherState = {
  list: any;
  lat: number;
  lon: number;
  city: string;
  country: string;
  details: any;
};

const initialState: WeatherState = {
  list: "",
  lat: 0.0,
  lon: 0.0,
  city: "",
  country: "",
  details: [],
};

const weather_store = createSlice({
  name: "weather_store",
  initialState,
  reducers: {
    setWeatherList(state, action: PayloadAction<any>) {
      state.list = action.payload;
    },
    setWeatherLat(state, action: PayloadAction<number>) {
      state.lat = action.payload;
    },
    setWeatherLon(state, action: PayloadAction<number>) {
      state.lon = action.payload;
    },
    setWeatherCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setWeatherCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    setWeatherDetails(state, action: PayloadAction<any>) {
      state.details = action.payload;
    },
  },
});

export const {
  setWeatherList,
  setWeatherLat,
  setWeatherLon,
  setWeatherCity,
  setWeatherCountry,
  setWeatherDetails,
} = weather_store.actions;
export default weather_store.reducer;
