var React = require('react');
var styles = require('../styles');


var ButtonHandler = React.createClass({
	getInitialState: function() {
		return {
			running: false,
			seconds: 60,
			minutes: 25,
		};
	},
	componentDidMount: function() {
		this.interval = setInterval(this.secondsHandler, 1000);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	secondsHandler: function() {
		if (this.state.running) {
			this.setState({
				seconds: (this.state.seconds - 1) % 60,
			});
		}
		if (this.state.seconds < 1) {
			this.setState({
				seconds: 60,
			});
		}
		this.minutesHandler();
	},
	minutesHandler: function() {
		if (this.state.running && this.state.seconds == 59) {
			this.setState({
				minutes: this.state.minutes - 1,
			});		
		}
		if (this.state.minutes == 0 && this.state.seconds == 60) {
			this.setState({
				running: false,
				seconds: 60,
				minutes: 25,
			});
		}
	},
	onPlay: function() {
		this.setState({ running: true });
	},
	onPause: function() {
		this.setState({ running: false });
	},
	onReset: function() {
		this.setState({
			running: false,
			seconds: 60,
			minutes: 25,
		});
	},
	onBreakTime: function() {
		this.setState({
			running: true,
			seconds: 60,
			minutes: 5,
		});
	},
	render: function() {
		var seconds = this.state.seconds;
		var minutes = this.state.minutes;

		return (
			<div>
				<div style={styles.timer}>
					{
						minutes < 10 ?
						'0' + minutes :
						minutes
					}
					:
					{
						seconds == 60 ?
						'00' :
						seconds < 10 ?
						'0' + seconds :
						seconds
					}
				</div>
				{ this.state.running ?
					<button onClick={this.onPause}>Pause</button>
					:
					<button onClick={this.onPlay}>Play</button>
				}
				<button onClick={this.onReset}>Reset</button>
				<button onClick={this.onBreakTime}>Break</button>
			</div>
		);
	}
});


function Home (props) {
	return (
		<div style={styles.wrapper}>
			<div style={styles.title}>Tomato Timer</div>
			<ButtonHandler />
		</div>
	);
}


module.exports = Home;