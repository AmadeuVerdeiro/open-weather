# OpenWeather App
For demonstration skills in REST, frontend, I choose this API when, with a request route, it returns a JSON with all the data about the city we chose in the input field on the app.

# API OpenWeather

<b>API call for get latitude e longitude</b><br>
http://api.openweathermap.org/geo/1.0/direct?q={city_name},{state_code},{country_code}&limit={limit}&appid={API_key}

<b>Parameters</b><br>

<b>% q:</b> 	required 	City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.<br><br>
<b>% appid:</b> 	required 	Your unique API key (you can always find it on your account page under the "API key" tab)<br><br>
<b>% limit:</b>	optional 	Number of the locations in the API response (up to 5 results can be returned in the API response)<br><br>

<b>Example of API call</b><br>
http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API_key}

<hr><br><br>

<b>API call for get Weather data</b><br>
https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API_key}

<b>Parameters</b><br>

<b>% lat, lon:</b>  	required 	Geographical coordinates (latitude, longitude). If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API.<br><br>
<b>% appid:</b> 	required 	Your unique API key (you can always find it on your account page under the "API key" tab)<br><br>
<b>% mode:</b>  	optional 	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more<br><br>
<b>% units:</b> 	optional 	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.<br><br>
<b>% lang:</b>  	optional 	You can use this parameter to get the output in your language. Learn more<br><br>
<b>Example of API call</b><br>
https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API_key} 
<hr>

# Diagram
<img src="Diagram Open weather.jpg" alt="Diagram Open weather"/>

# Autor
Amadeu Verdeiro<br>
<a href="https://www.linkedin.com/in/amadeuverdeiro">
<img src="https://api.iconify.design/logos:linkedin.svg"/>
</a>
