import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="navbar-static-bottom" style={{
            marginTop: '50px',
            background:'#78c2ad'
        }}>
            <footer
            style={{
                color:'white'
            }}>
                <Container>
                    <Row>
                        <Col className="text-center py-3">Copyright &copy; </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
    