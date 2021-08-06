import React from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const Container = styled.div`
    margin: 5px;
    padding: 10px;
    border: 1px dotted gray;

    .incrementAmountSlider {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0 15px;

        .spacer {
            width: 15px;
        }
    }
`;

const SpeedControl = (props: {
    incrementAmount: number,
    setIncrementAmount: Function,
}) => {
    const MIN_VALUE = 0.05;
    const MAX_VALUE = 0.6;
    const STEP_AMOUNT = 0.025;

	return (
		<Container>
            <h4>Animation Speed Control</h4>

            <div className="incrementAmountSlider">
                <Slider
                    value={typeof props.incrementAmount === 'number' ? props.incrementAmount : MIN_VALUE}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'number') {
                            const foo : number = newValue;
                            props.setIncrementAmount(foo)
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
                    value={props.incrementAmount}
                    margin="dense"
                    onChange={(event) => props.setIncrementAmount(event.target.value === '' ? MIN_VALUE : Number(event.target.value))}
                    onBlur={ () => {
                        if (props.incrementAmount < MIN_VALUE) {
                            props.setIncrementAmount(MIN_VALUE);
                        } else if (props.incrementAmount > MAX_VALUE) {
                            props.setIncrementAmount(MAX_VALUE);
                        }
                    }}
                    inputProps={{
                        step: STEP_AMOUNT,
                        min: MIN_VALUE,
                        max: MAX_VALUE,
                        type: 'number',
                    }}
                />
            </div>

		</Container>
	);
}
	
export default SpeedControl;