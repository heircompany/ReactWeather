const
React = require("react");

// form component
const WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        const location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = " ";
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="location" placeholder="Your Location" />
                </div>
                <div>
                    <button className="button expanded hollow">Get Weather</button>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;
