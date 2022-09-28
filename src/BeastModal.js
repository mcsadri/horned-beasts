import React from 'react';
import './App.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

class BeastModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Image
                    src={this.props.selectedBeast.image_url}
                    alt={this.props.selectedBeast.title}
                    title={this.props.selectedBeast.title}
                />
                <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default BeastModal;
