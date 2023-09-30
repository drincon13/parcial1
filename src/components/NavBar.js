import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl'
import es from "../assets/es.png"
import en from "../assets/en.png"

function NavBar({ locale, setLocale }) {
    return (

        <Navbar className="bg-body-tertiary justify-content-between">
            <Col xs="auto">
                <h1><FormattedMessage id='el aroma'></FormattedMessage></h1>
            </Col>
            <Col xs="auto"></Col>
            <Col xs="auto">

                {locale.includes("en") ? (
                    <button
                        className="btn btn-sm btn-secondary aspect-square"
                        onClick={() => setLocale("es-ES")}
                    >
                        <img src={en} alt="english" style={{ width: '24px', height: '24px' }} />
                    </button>
                ) : (
                    <button
                        className="btn btn-sm btn-secondary aspect-square"
                        onClick={() => setLocale("en")}
                    >
                        <img src={es} alt="español" style={{ width: '24px', height: '24px' }} />
                    </button>
                )}
            </Col>

        </Navbar >

    );
}

export default NavBar;