import React, { Component } from 'react'; 
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { onLogout, keepLogin } from '../actioncreators';

const cookies = new Cookies();

class Header extends Component {
    
    onLogOutClick = () => {
        this.props.onLogout();
    }

    renderNavbar = () => {
        if(this.props.auth.username != "") {
            return(
                <Navbar fixedTop={true} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Cinema Bertasbih</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/movielist">Movie List</Link>
                        </NavItem>
                    </Nav>
                <Nav pullRight>
                     <NavDropdown eventKey={4} title={"Hello, " + this.props.auth.username} id="basic-nav-dropdown">
                    <MenuItem divider />
                    <MenuItem eventKey={4.3} onSelect={this.onLogOutClick}>Log Out</MenuItem>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            );
        }
        return(
            <Navbar fixedTop={true} inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Cinema Bertasbih</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1}>
                        <Link to="/movielist">Movie List</Link>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1}>
                        <Link to="/login">Login</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/register">Register</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }

    render() {
        return(
            this.renderNavbar()
        );
    }
}

const mapStatetoProps = (state) => {
    const auth = state.auth;

    return { auth };
}

export default connect(mapStatetoProps, { onLogout })(Header); // yang di return ( on LogOut ) itu masuk ke dalam props