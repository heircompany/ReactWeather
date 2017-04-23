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
                return <h3 className="text-center">Getting weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Check Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
