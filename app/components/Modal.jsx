const
React = require("react"),
ReactDOM = require("react-dom"),
ReactDOMServer = require("react-dom/server");

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
        const {title, message} = this.props;
        const modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Try Again</button>
                </p>
            </div>
        );
        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        let modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },
    render: function () {
        return (
            <div>
            </div>
        );
    }
});

module.exports = ErrorModal;
