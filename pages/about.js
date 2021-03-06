import Layout from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';

export default function about() {
	return (
		<div className="container">
			<h1 className="text-center">What is Crypto Currency?</h1>
			<br />
			<Container style={{display: 'flex'}}>
				<Row>
					<Col style={{ backgroundColor: 'white', paddig: '1rem' }}>
						<p style={{ color: 'black' }}>
							At its core, cryptocurrency is typically decentralized digital money designed to be used
							over the internet. Bitcoin, which launched in 2008, was the first cryptocurrency, and it
							remains by far the biggest, most influential, and best-known. In the decade since, Bitcoin
							and other cryptocurrencies like Ethereum have grown as digital alternatives to money issued
							by governments.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
