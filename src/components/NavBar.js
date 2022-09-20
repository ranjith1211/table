import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>

            <br />
            <Navbar bg="primary" variant="dark text-center" >
                <Container >
                    <Navbar.Brand href="#home">MARKET CAP
                        <Nav className="my-auto text-center">$1.65T </Nav></Navbar.Brand>

                    <Navbar.Brand href="#home">EXCHANGE VOL
                        <Nav className='my-auto'>$130.28B </Nav></Navbar.Brand>
                    <Navbar.Brand href="#home">ASSETS
                        <Nav>1,37 </Nav></Navbar.Brand>
                    <Navbar.Brand href="#home">EXCHANGES
                        <Nav>90 </Nav></Navbar.Brand>
                    <Navbar.Brand href="#home">MARKETS
                        <Nav>10,085</Nav></Navbar.Brand>
                    <Navbar.Brand href="#home">BTC INDEX
                        <Nav>45.0%</Nav></Navbar.Brand>

                </Container>
            </Navbar>




        </>
    );
}

export default NavBar;