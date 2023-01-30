import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const ModalPurchases = ({ show, handleClose }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <Modal.Title>Electronic bill</Modal.Title>
                    <Modal.Body>
                        <p>friend shop c.a </p> J‑29989842‑2
                    </Modal.Body>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>product</th>
                                <th>price</th>
                                <th>amount</th>
                                <th>Total to pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Samsung Galaxy S22</td>
                                <td>1399.00</td>
                                <td>1</td>
                                <td>1399.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Body
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <p>
                        <strong>total paid</strong>
                    </p>
                    <p>1399.00</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalPurchases;
