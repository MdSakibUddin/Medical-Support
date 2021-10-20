import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" style={{ height: '55px' }} variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <NavLink as={Link} to="/" style={{ textDecoration: 'none' }}><h3 className="textExtra"><span id="textMain"> Medical-Care </span>Services</h3></NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center bg-dark">
                        <Nav.Link as={HashLink} to="/home#home" style={{ margin: '10px', textDecoration: 'none', color: 'white' }} >Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#about" style={{ textDecoration: 'none', color: 'white' }}>About</Nav.Link>



                        <Nav.Link as={HashLink} to="/home#more" style={{ textDecoration: 'none', color: 'white' }} >More</Nav.Link>
                        <Nav.Link as={Link} to="/administrative" style={{ textDecoration: 'none', color: 'white' }} >Administrative</Nav.Link>
                        <Nav.Link as={Link} to="/pricing" style={{ textDecoration: 'none', color: 'white' }} >Pricing</Nav.Link>


                        {user?.displayName ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <NavLink as={Link} to="/login" style={{ margin: '10px', textDecoration: 'none', fontWeight: "bold", color: 'goldenrod' }}
                            >Login</NavLink>}


                        <Navbar.Text>
                            {user.displayName &&
                                <a href="#login" style={{ textDecoration: 'none', paddingLeft: '5px', color: 'yellow', fontWeight: 'bold' }}>User:{user?.displayName}</a>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;