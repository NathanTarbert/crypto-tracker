import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Coin from '../pages/coin/[id]';

export default function ModalPopUp({ props, coin }) {
    console.log("coin", coin);

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Crypto Tracker
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Description</h4>
          <p>
           Hello
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export async function getServerSideProps(context) {
	const { id } = context.query;

	const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`); //https://www.coingecko.com/en/api#explore-api (/coins/{id})

	const data = await res.json();

	return {
		props: {
			coin: data
		}
	};
}



