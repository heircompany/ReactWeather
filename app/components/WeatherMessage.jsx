const
React = require("react");

const WeatherMessage = ({temp, location}) => {
    return (
        <h5 className="text-center">Currently {temp} degrees in {location}.</h5>
    );
}

module.exports = WeatherMessage;
