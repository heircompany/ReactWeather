const
React = require("react"),
WeatherForm = require("WeatherForm"),
WeatherMessage = require("WeatherMessage"),
openWeatherMap = require("openWeatherMap"),
ErrorModal = require("Modal");

const Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        let that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location,
                temp,
                isLoading: false
            })
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    componentDidMount: function () {
        let location = this.props.location.query.location;
        // was the query string an actual search, and does the location exist?
        if (location && location.length > 0) {
            this.handleSearch(location);
            // reset query string in URL
            window.location.hash = "#/";
        }
    },
    componentWillReceiveProps: function (newProps) {
        // for nav search
        let location = newProps.location.query.location;
        // was the query string an actual search, and does the location exist?
        if (location && location.length > 0) {
            this.handleSearch(location);
            // reset query string in URL
            window.location.hash = "#/";
        }
    },
    render: function() {
        let {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Getting weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Check Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
