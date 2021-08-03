import React from 'react';

import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';



const HelpModal = (props: {
    modalOpenStatus: boolean,
    setModalOpenStatus: Function,
}) => {
    return (
        <Modal
            open={props.modalOpenStatus}
            onClose={() => props.setModalOpenStatus(false)}
        >
            <div>
                hello
            </div>
        </Modal>
    )
}

export default HelpModal;