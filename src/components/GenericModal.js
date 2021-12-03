import React, { Fragment } from "react";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function GenericModal (props) {

  return(
    <>
     <Modal isOpen={props.modal} toggle={props.toggle} style={{ width: props.width }} >
       <ModalHeader toggle={props.toggle}>{props.tittle}</ModalHeader>
       <ModalBody style={{ height:props.height, overflow: props.scroll }}>
         {props.children}
       </ModalBody>
       <ModalFooter>
          <Button color="success" onClick={props.toggle}>CERRAR{" "}</Button>
       </ModalFooter>
     </Modal>
    </>
  );
}

export default GenericModal;