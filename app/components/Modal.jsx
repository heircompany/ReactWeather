const
React = require("react");

const ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: "Can't Get Weather"
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        let modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },
    render: function () {
        const {title, message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Try Again</button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;
