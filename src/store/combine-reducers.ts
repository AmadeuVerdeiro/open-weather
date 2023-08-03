import { combineReducers } from "@reduxjs/toolkit";
import weatherStore from "../reducer/weather.store";

export const rootReducer = combineReducers({
    weather_store: weatherStore,
});
