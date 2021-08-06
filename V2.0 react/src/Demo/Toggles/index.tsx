import React from 'react';
import styled from 'styled-components';

import { FormControlLabel, Switch } from '@material-ui/core';


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
        <div>
            <h2>Toggle Features Shown </h2>
            <FormControlLabel
                control={
                    <Switch
                        checked={displayCubeBox}
                        onChange={() => setDisplayCubeBox(!displayCubeBox)}
                        color="primary"
                    />
                }
                label={displayCubeBox ? "Displaying White Cube Box" : "Not Displaying White Cube Box"}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={displayCoilsAndCorners}
                        onChange={() => setDisplayCoilsAndCorners(!displayCoilsAndCorners)}
                        color="primary"
                    />
                }
                label={displayCoilsAndCorners ? "Displaying Coils and Corners" : "Not Displaying Coils and Corners"}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={displayGrayCubeBox}
                        onChange={() => setDisplayGrayCubeBox(!displayGrayCubeBox)}
                        color="primary"
                    />
                }
                label={displayGrayCubeBox ? "Displaying Gray Cube Box" : "Not Displaying Gray Cube Box"}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={displayEmagIDs}
                        onChange={() => setDisplayEmagIDs(!displayEmagIDs)}
                        color="primary"
                    />
                }
                label={displayEmagIDs ? "Displaying Electromagnet IDs" : "Not Displaying Electromagnet IDs"}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={displayEmags}
                        onChange={() => setDisplayEmags(!displayEmags)}
                        color="primary"
                    />
                }
                label={displayEmags ? "Displaying Electromagnets" : "Not Displaying Electromagnets"}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={displayCubeIDs}
                        onChange={() => setDisplayCubeIDs(!displayCubeIDs)}
                        color="primary"
                    />
                }
                label={displayCubeIDs ? "Displaying Cube IDs" : "Not Displaying Cube IDs"}
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={display3DArrows}
                        onChange={() => setDisplay3DArrows(!display3DArrows)}
                        color="primary"
                    />
                }
                label={display3DArrows ? "Displaying 3d Arrows" : "Not Displaying 3d Arrows"}
            />
            {/*  */}
            <FormControlLabel
                control={
                    <Switch
                        checked={showPath}
                        onChange={() => setShowPath(!showPath)}
                        name="showPathToggle"
                        color="primary"
                    />
                }
                label={showPath ? "Showing Path of Rotation without Movement" : "Simulating and Animating Cube Movement"}
            />
        </div>
	);
}
	
export default Toggles;