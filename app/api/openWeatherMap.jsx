const
React = require("react"),
axios = require("axios"),
API_KEY = "fffb28c516b89a140482b2f6698dfffa",
OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(err) {
            throw new Error("City not found.");
        });
    }
}
