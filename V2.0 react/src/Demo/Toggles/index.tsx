import React from 'react';
import styled from 'styled-components';

import { FormControlLabel, Switch } from '@material-ui/core';
import SpeedControl from "./SpeedControl";

const Container = styled.div`
    width: 100%;
    height: 100%;

    .activeText {
        color: "#000000"
    }

    .inactiveText {
        color: #acacac;
    }
`;

const Toggles = (props: {
    showPath: boolean,
    setShowPath: Function,
    displayCubeBox: boolean,
    setDisplayCubeBox: Function,
    displayCoilsAndCorners: boolean,
    setDisplayCoilsAndCorners: Function,
    displayEmagIDs: boolean,
    setDisplayEmagIDs: Function,
    displayGrayCubeBox: boolean,
    setDisplayGrayCubeBox: Function,
    displayEmags: boolean,
    setDisplayEmags: Function,
    displayCubeIDs: boolean,
    setDisplayCubeIDs: Function,
    display3DArrows: boolean,
    setDisplay3DArrows: Function,

    incrementAmount: number,
    setIncrementAmount: Function,
    intervalAmount: number,
    setIntervalAmount: Function,
}) => {
    const {
        showPath,
        setShowPath,
        displayCubeBox,
        setDisplayCubeBox,
        displayCoilsAndCorners,
        setDisplayCoilsAndCorners,
        displayEmagIDs,
        setDisplayEmagIDs,
        displayGrayCubeBox,
        setDisplayGrayCubeBox,
        displayEmags,
        setDisplayEmags,
        displayCubeIDs,
        setDisplayCubeIDs,
        display3DArrows,
        setDisplay3DArrows} = props;

	return (
        <Container>
            <h2>Toggle Features Shown </h2>
            <div className={displayCubeBox ? "activeText" : "inactiveText"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={displayCubeBox}
                            onChange={() => setDisplayCubeBox(!displayCubeBox)}
                            color="primary"
                        />
                    }
                    label={"Displaying White Cube Box"}
                />
            </div>
            <div className={displayGrayCubeBox ? "activeText" : "inactiveText"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={displayGrayCubeBox}
                            onChange={() => setDisplayGrayCubeBox(!displayGrayCubeBox)}
                            color="primary"
                        />
                    }
                    label={"Displaying Gray Cube Box"}
                />
            </div>
            <div className={displayCoilsAndCorners ? "activeText" : "inactiveText"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={displayCoilsAndCorners}
                            onChange={() => setDisplayCoilsAndCorners(!displayCoilsAndCorners)}
                            color="primary"
                        />
                    }
                    label={"Displaying Coils and Corners"}
                />
            </div>
            <div className={displayEmags ? "activeText" : "inactiveText"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={displayEmags}
                            onChange={() => setDisplayEmags(!displayEmags)}
                            color="primary"
                        />
                    }
                    label={"Displaying Electromagnets"}
                />
            </div>
            <div className={displayEmagIDs ? "activeText" : "inactiveText"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={displayEmagIDs}
                            onChange={() => setDisplayEmagIDs(!displayEmagIDs)}
                            color="primary"
                        />
                    }
                    label={"Displaying Electromagnet IDs"}
                />
            </div>
            <div className={displayCubeIDs ? "activeText" : "inactiveText"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={displayCubeIDs}
                            onChange={() => setDisplayCubeIDs(!displayCubeIDs)}
                            color="primary"
                        />
                    }
                    label={"Displaying Cube IDs"}
                />
            </div>
            <div className={display3DArrows ? "activeText" : "inactiveText"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={display3DArrows}
                            onChange={() => setDisplay3DArrows(!display3DArrows)}
                            color="primary"
                        />
                    }
                    label={"Displaying 3D Arrows"}
                />
            </div>



            <hr/>
            <div className={showPath ? "activeText" : "inactiveText"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={showPath}
                            onChange={() => setShowPath(!showPath)}
                            name="showPathToggle"
                            color="primary"
                        />
                    }
                    label={"Showing Path of Rotation (No pivots movements)"}
                />
            </div>

            <hr/> 
            
            <SpeedControl
                incrementAmount={props.incrementAmount}
                setIncrementAmount={props.setIncrementAmount}
                intervalAmount={props.intervalAmount}
                setIntervalAmount={props.setIntervalAmount}
            />

        </Container>
	);
}
	
export default Toggles;