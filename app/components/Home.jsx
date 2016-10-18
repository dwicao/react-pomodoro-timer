import React from 'react';
import HomeContainer from '../containers/HomeContainer.jsx';


export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			running: false,
			seconds: 60,
			minutes: 25,
		};
		this.onPlay = this.onPlay.bind(this);
		this.onPause = this.onPause.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onBreakTime = this.onBreakTime.bind(this);
		this.secondsHandler = this.secondsHandler.bind(this);
		this.setTimer = this.setTimer.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	setTimer() {
		this.interval = setInterval(this.secondsHandler, 1000);
	}

	secondsHandler() {
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
		if (this.state.running && this.state.seconds === 59) {
			this.setState({
				minutes: this.state.minutes - 1,
			});		
		}
		if (this.state.minutes === 0 && this.state.seconds === 60) {
			this.setState({
				running: false,
				seconds: 60,
				minutes: 25,
			});
		}
	}

	onPlay() {
		this.setState({ running: true });
		this.setTimer();
	}

	onPause() {
		this.setState({ running: false });
		clearInterval(this.interval);
	}

	onReset() {
		this.setState({
			running: false,
			seconds: 60,
			minutes: 25,
		});
		clearInterval(this.interval);
	}

	onBreakTime() {
		clearInterval(this.interval);
		this.setState({
			running: true,
			seconds: 60,
			minutes: 5,
		});
		this.setTimer();
	}

	render() {
		return (
			<div>
				<HomeContainer
					seconds={this.state.seconds}
					minutes={this.state.minutes}
					running={this.state.running}
					onPlay={this.onPlay}
					onReset={this.onReset}
					onPause={this.onPause}
					onBreakTime={this.onBreakTime}
				/>
			</div>
		);
	}

}