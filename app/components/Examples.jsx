const
React = require("react"),
{Link} = require("react-router");

// const Examples = React.createClass({
//     render: function() {
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });

const Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p className="text-center">Here a few example locations to test the app:</p>
            <ol>
                <li>
                    <Link to="/?location=San Diego">San Diego, CA</Link>
                </li>
                <li>
                    <Link to="/?location=Chicago">Chicago, IL</Link>
                </li>
                <li>
                    <Link to="/?location=London">London, UK</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;
