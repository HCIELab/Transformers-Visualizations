import React from 'react';
import styled from 'styled-components';

import {IncrementSlider} from "./IncrementSlider";
import {IntervalSlider} from "./IntervalSlider";

const Container = styled.div`
    margin: 5px;
    padding: 10px;
    /* border: 1px dotted gray; */
`;

const SpeedControl = (props: {
    incrementAmount: number,
    setIncrementAmount: Function,
    intervalAmount: number,
    setIntervalAmount: Function,
}) => {
	return (
		<Container>
            <h4>Animation Speed Control</h4>

            <p>Increment (in radians): </p>
            <IncrementSlider incrementAmount={props.incrementAmount} setIncrementAmount={props.setIncrementAmount} />

            <p>Interval (in milliseconds): </p>
            <IntervalSlider intervalAmount={props.intervalAmount} setIntervalAmount={props.setIntervalAmount} />

		</Container>
	);
}
	
export default SpeedControl;