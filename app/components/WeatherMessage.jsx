const
React = require("react");

// // message component
// const WeatherMessage = React.createClass({
//     render: function() {
//         let {temp, location} = this.props;
//         return (
//             <h3>It's currently {temp} in {location}.</h3>
//         );
//     }
// });

const WeatherMessage = ({temp, location}) => {
    return (
        <h5 className="text-center">Currently {temp} degrees in {location}.</h5>
    );
}

module.exports = WeatherMessage;
