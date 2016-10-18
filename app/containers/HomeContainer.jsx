// Lib
import React, { PropTypes } from 'react';

// Material UI Component
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconPlay from 'material-ui/svg-icons/av/play-arrow';
import IconPause from 'material-ui/svg-icons/av/pause';
import IconReset from 'material-ui/svg-icons/action/cached';
import IconBreak from 'material-ui/svg-icons/places/free-breakfast';

// CSS
import '../styles/main.css';

// Required for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
	marginLeft: 15,
	marginRight: 15,
}

function HomeContainer (props)  {
		const seconds = props.seconds;
		const minutes = props.minutes;
		return (
			<div className="pomodoro-wrapper">
				<div className="pomodoro-title">Tomato Timer</div>
				<div className="pomodoro-timer">
					{
						minutes < 10 ?
						'0' + minutes :
						minutes
					}
					:
					{
						seconds === 60 ?
						'00' :
						seconds < 10 ?
						'0' + seconds :
						seconds
					}
				</div>
				<div className="pomodoro-button">
				{ props.running ?
						<FloatingActionButton style={style} onTouchTap={props.onPause}>
	      					<IconPause />
	    				</FloatingActionButton>
					:
						<FloatingActionButton style={style} onTouchTap={props.onPlay}>
	      					<IconPlay />
	    				</FloatingActionButton>
				}
				<FloatingActionButton style={style} onTouchTap={props.onReset}>
      				<IconReset />
    			</FloatingActionButton>
				<FloatingActionButton style={style} onTouchTap={props.onBreakTime}>
      				<IconBreak />
    			</FloatingActionButton>
    			</div>
			</div>
		);
}

HomeContainer.PropTypes = {
	seconds: React.PropTypes.number.isRequired,
	minutes: React.PropTypes.number.isRequired,
	running: React.PropTypes.bool.isRequired,
	onPause: React.PropTypes.func.isRequired,
	onPlay: React.PropTypes.func.isRequired,
	onReset: React.PropTypes.func.isRequired,
	onBreakTime: React.PropTypes.func.isRequired,
};

export default HomeContainer;