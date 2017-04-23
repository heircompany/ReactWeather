const
React = require("react"),
WeatherForm = require("WeatherForm"),
WeatherMessage = require("WeatherMessage"),
openWeatherMap = require("openWeatherMap");

const Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        let that = this;
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location,
                temp,
                isLoading: false
            })
        }, function(errorMessage) {
            alert(errorMessage);
            that.setState({isLoading: false});
        });
    },
    render: function() {
        let {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Getting weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
