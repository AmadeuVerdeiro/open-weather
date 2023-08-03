import { useState } from "react";
import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { setWeatherDetails } from "./reducer/weather.store";
import { Button, TextField } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const weatherStore = useSelector(
    (state: RootState) => state.rootReducer.weather_store
  );

  const [cityIn, setCintyIn] = useState("");
  const [countryIn, setCountryIn] = useState("");
  let latIn = 0;
  let lonIn = 0;

  const { details } = weatherStore;

  async function getCityLatLon(city: string, country: string): Promise<any> {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=0ddd08bdbcb58d9e02db1d8ef58d9056`
      );
      if (!res.ok) {
        throw new Error(`Error on request: ${res.status}`);
      }
      await res.json().then((data) => {
        latIn = parseFloat(data[0].lat);
        lonIn = parseFloat(data[0].lon);
      });
    } catch (error) {
      console.error(`Error on loading data: ${error}`);
      throw error;
    } finally {
      getCityWeather(latIn, lonIn);
    }
  }

  async function getCityWeather(lat: number, lon: number): Promise<any> {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0ddd08bdbcb58d9e02db1d8ef58d9056`
      );
      if (!res.ok) {
        throw new Error(`Error on request: ${res.status}`);
      }
      await res.json().then((data) => {
        dispatch(setWeatherDetails(data));
      });
    } catch (error) {
      console.error(`Error on loading data: ${error}`);
      throw error;
    } finally {
    }
  }

  const handleSetCity = (event) => {
    setCintyIn(event.target.value);
  };

  const handleSetCountry = (event) => {
    setCountryIn(event.target.value);
  };

  function handleDataCity() {
    getCityLatLon(cityIn, countryIn);
    setCountryIn("");
    setCintyIn("");
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          backgroundColor: "#ffff",
          maxWidth: "400px",
          justifyItems: "center",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "-moz-initial",
        }}
      >
        <TextField
          style={{ padding: "1rem" }}
          id="cityInValue"
          label="City"
          variant="standard"
          value={cityIn}
          onChange={handleSetCity}
        />
        <TextField
          style={{ padding: "1rem" }}
          id="countryInValue"
          label="Country"
          variant="standard"
          value={countryIn}
          onChange={handleSetCountry}
        />
        <Button
          style={{
            padding: "1rem",
            maxWidth: "10rem",
            justifyContent: "center",
          }}
          variant="contained"
          color="success"
          onClick={handleDataCity}
        >
          Check weather
        </Button>
      </div>
      <div>
        <h1> {details?.main.temp}</h1>
        <h1> {details.weather[0].main}</h1>
        <h1> {details.main.temp}</h1>
        <h1> {details.clouds.all} </h1>
      </div>
    </>
  );
}

export default App;
