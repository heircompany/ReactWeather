const
React = require("react"),
{Link} = require("react-router")

// const About = React.createClass({
//     render: function() {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

const About = (props) => {
    return (
        <div>
            <h2 className="text-center">About This App</h2>
            <p className="text-center">This weather application searches Open Weather Map for the current temperature.</p>
            <p className="text-center">Team Mead for Life.</p>
            <h4 className="text-center">Development Tools:</h4>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - Frontend JavaScript Framework
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> - Weather API
                </li>
                <li>
                    <a href="https://babeljs.io">Babel</a> - JavaScript Transpiler for ES6 and React Support
                </li>
                <li>
                    <a href="https://foundation.zurb.com">Foundation</a> - Responsive Frontend Framework
                </li>
                <li>
                    <a href="https://heroku.com">Heroku</a> - Cloud Environment to Host Application
                </li>
                <li>
                    <a href="https://webpack.js.org">Webpack</a> - JavaScript Module Bundler
                </li>
            </ol>
        </div>
    );
};

module.exports = About;
