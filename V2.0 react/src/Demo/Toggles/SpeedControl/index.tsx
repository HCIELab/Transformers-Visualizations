import React from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { useState } from 'react';

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

const SpeedControl = () => {
    const [value, setValue] = useState<number | string | Array<number | string>>(30);

	return (
		<Container>
            <h4>Animation Speed Control</h4>

            <div className="incrementAmountSlider">
                <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={(event, newValue) => setValue(newValue)}
                    aria-labelledby="input-slider"
                />

                <div className="spacer"></div>

                <Input
                    value={value}
                    margin="dense"
                    onChange={(event) => setValue(event.target.value === '' ? '' : Number(event.target.value))}
                    onBlur={ () => {
                        if (value < 0) {
                            setValue(0);
                        } else if (value > 100) {
                            setValue(100);
                        }
                    }}
                    inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                />
            </div>

		</Container>
	);
}
	
export default SpeedControl;