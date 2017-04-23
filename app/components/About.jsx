const
React = require("react");

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
            <h3>About this Application</h3>
            <p>Welcome to the About Page!</p>
        </div>
    )
};

module.exports = About;
