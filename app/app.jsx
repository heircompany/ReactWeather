const
React = require("react"),
ReactDOM = require("react-dom"),
{Route, Router, IndexRoute, hashHistory} = require("react-router"),
Main = require("Main"),
Weather = require("Weather"),
About = require("About"),
Examples = require("Examples");

// load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css")
$(document).foundation();

// include css
require("style-loader!css-loader!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById("app")
);
