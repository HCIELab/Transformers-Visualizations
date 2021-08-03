import React from 'react';

import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .Inner {
        border: 1px solid black;
        padding: 100px;
        margin: auto;
        background-color: white;
    }
`;

const HelpModal = (props: {
    modalOpenStatus: boolean,
    setModalOpenStatus: Function,
}) => {
    return (
        <Modal
            open={props.modalOpenStatus}
            onClose={() => props.setModalOpenStatus(false)}
        >
            <Container>
                <div className={"Inner"}>
                    <h1>Web Simulation for Electromagnetically Actuated Reconfigurable Robots</h1>
                    <hr/>
                

                    <h2>3D World</h2>
                    <p>Interact with the cubes by clicking on one at a time. This will cause an individual rotation. Click on a 3D arrow in order to select the direction to rotate in.</p>

                    <h2>
                        Script buttons
                    </h2>
                    <p>Located in the <i>top left</i>. One click and they will activate a pre-defined script.</p>

                    <h2>
                        Toggle buttons
                    </h2>
                    <p>Located in the <i>top right</i>. Click on them to adjust what is visually rendered on the cubes in the 3D world.</p>



                    <p> 💡 Please do not click a cube before a previous rotation has completed animating. Or while a script has not ended.</p>
                    <p> 💡 Please do not move the camera while a rotation is in motion.</p>
                    <p> 💡 Please do not change to a different browser tab while a rotation is in motion.</p>
                    <p> 💡 Refresh the page if an instruction script encounters an error.</p>
                </div>
            </Container>
        </Modal>
    )
}

export default HelpModal;