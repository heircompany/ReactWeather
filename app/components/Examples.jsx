const
React = require("react");

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
            <h3>Example Weather Requests</h3>
            <p>Welcome to the Examples Page!</p>
        </div>
    )
};

module.exports = Examples;
