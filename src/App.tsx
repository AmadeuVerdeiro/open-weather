import { useState } from "react";
import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { setWeatherDetails } from "./reducer/weather.store";
import { Button, TextField } from "@mui/material";
import { ConversorKelvin } from "./assets/components/data-manage";

function App() {
  const dispatch = useDispatch();
  const weatherStore = useSelector(
    (state: RootState) => state.rootReducer.weather_store
  );

  const { details } = weatherStore;

  const [cityIn, setCintyIn] = useState("");
  const [countryIn, setCountryIn] = useState("");
  let latIn = 0;
  let lonIn = 0;
  let image = "";

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
        image = data.weather[0].icon;
      });
    } catch (error) {
      console.error(`Error on loading data: ${error}`);
      throw error;
    } finally {
      imageWheather();
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
  function imageWheather() {
    const urlImage = `https://openweathermap.org/img/wn/${image}@2x.png`;
    const elementImage = document.getElementById("image");
    if (elementImage instanceof HTMLImageElement) {
      elementImage.src = urlImage;
    }
  }
  return (
    <>
      <div
        
        style={{
          marginTop: "20%",
        }}
      >
        <h1
          style={{
            color: "#ffff",
            fontWeight: "bolder",
          }}
        >
          Open weather APP
        </h1>
        <h4></h4>
      </div>
      <div
      className="content"
        style={{
          display: "grid",
          backgroundColor: "#ffff",
          maxWidth: "400px",
          justifyItems: "center",
          padding: "1rem",
          borderRadius: "10px",
          marginTop: "10%",
        }}
      >
        <TextField
          style={{ padding: "1rem", maxWidth: "300px", marginBottom: "1rem" }}
          id="cityInValue"
          label="City"
          variant="standard"
          value={cityIn}
          onChange={handleSetCity}
        />
        <TextField
          style={{ padding: "1rem", maxWidth: "300px", marginBottom: "1rem" }}
          id="countryInValue"
          label="Country"
          variant="standard"
          value={countryIn}
          onChange={handleSetCountry}
        />
        <Button
          style={{
            padding: "1rem",
            maxWidth: "100%",
            justifyContent: "center",
            justifyItems: "center",
          }}
          variant="contained"
          color="success"
          onClick={handleDataCity}
        >
          Check weather
        </Button>
      </div>
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          maxWidth: "400px",
          backgroundColor: "#ffff",
          padding: "1rem",
          marginTop: "1rem",
          borderRadius: "10px",
        }}
      >
        <h1>
          {ConversorKelvin(
            details ? (details.main ? details.main.temp : 273) : 273
          )}
        </h1>
        <img id="image" src="https://openweathermap.org/img/wn/02d@2x.png" />
      </div>
    </>
  );
}

export default App;
