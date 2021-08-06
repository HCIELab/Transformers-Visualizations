import React from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 15px;

    .spacer {
        width: 15px;
    }
`;

export const IntervalSlider = (props: {
    intervalAmount: number,
    setIntervalAmount: Function,
}) => {
    const MIN_VALUE = 300;
    const MAX_VALUE = 5000;
    const STEP_AMOUNT = 100;

	return (
		<Container>
            <Slider
                value={typeof props.intervalAmount === 'number' ? props.intervalAmount : MIN_VALUE}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'number') {
                        const foo : number = newValue;
                        props.setIntervalAmount(foo)
                    }
                }}
                aria-labelledby="input-slider"
                step={STEP_AMOUNT}
                marks
                min={MIN_VALUE}
                max={MAX_VALUE}
            />

            <div className="spacer"></div>

            <Input
                value={props.intervalAmount}
                margin="dense"
                onChange={(event) => props.setIntervalAmount(event.target.value === '' ? MIN_VALUE : Number(event.target.value))}
                onBlur={ () => {
                    if (props.intervalAmount < MIN_VALUE) {
                        props.setIntervalAmount(MIN_VALUE);
                    } else if (props.intervalAmount > MAX_VALUE) {
                        props.setIntervalAmount(MAX_VALUE);
                    }
                }}
                inputProps={{
                    step: STEP_AMOUNT,
                    min: MIN_VALUE,
                    max: MAX_VALUE,
                    type: 'number',
                }}
            />
		</Container>
	);
}