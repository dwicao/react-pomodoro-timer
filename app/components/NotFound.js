var React = require('react');

var NotFound = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Not found (code: 404)</h1>
			</div>
		);
	}
});

module.exports = NotFound;