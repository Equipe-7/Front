import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import"./Login.css"

function ModalLogin(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='close' closeButton>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin