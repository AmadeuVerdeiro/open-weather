import {PayLoadAction, createSlice} from "@reduxjs/toolkit";

type WeatherState = {
    list: any[];
    lat: number;
    lon: number;
    city: string;
    country: string;
    details: any[];
}

const initialState: WeatherState = {
    list: [],
    lat: 0,
    lon: 0,
    city: "",
    country:"",
    details: [],
}

const weather_store = createSlice({
    name: "weather_store",
    initialState,
    reducers: {
        setWeatherList(state, action: PayLoadAction<any[]>){
            state.list = action.payload;
        },
    },
});

export const {
    setWeatherList,
} = weather_store;
export default weather_store.reducer;