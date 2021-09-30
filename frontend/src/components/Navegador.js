import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";


const Navegador = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar color="transparent" light expand="md">
                <div className="container">
                    <div>
                        <NavbarBrand href="/" className="fw-bold text-light">Mytinerary</NavbarBrand>
                    <NavbarText className="text-light"><span className="fs-6 text-primary">{props.token ? `<${props.firstname}/>` : "<Digital Nomads/>"}</span> </NavbarText>
                    </div>

                    <div>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ms-auto order-6" navbar>
                                <NavItem className="d-flex">
                                    <NavLink exact to="/cities" className="fs-6 align-self-center text-light text-decoration-none me-3">Cities</NavLink>
                                </NavItem>
                                <NavItem className="d-flex">
                                    <NavLink exact to="/" className="fs-6 align-self-center text-light text-decoration-none me-3">Home</NavLink>
                                </NavItem>
                                <NavItem className="d-flex">
                                    <NavLink exact to="/aboutUs" className="fs-6 align-self-center text-secondary text-decoration-none me-3">About us</NavLink>
                                </NavItem>
                                {!props.token &&
                                    <NavItem className="d-flex">
                                        <NavLink exact to="/signup" className="fs-6 align-self-center text-light text-decoration-none me-3">Sign up</NavLink>
                                    </NavItem>
                                }
                                {!props.token &&
                                    <NavItem className="d-flex">
                                        <NavLink exact to="/login" className="fs-6 align-self-center text-light text-decoration-none me-3">Log in</NavLink>
                                    </NavItem>
                                }
                                {props.token &&
                                    <NavItem className="d-flex">
                                        <NavLink onClick={() => props.logOut()} exact to="/" className="fs-6 align-self-center text-light text-decoration-none me-3">Log out</NavLink>
                                    </NavItem>
                                }
                            </Nav>
                        </Collapse>
                    </div>
                    <UncontrolledDropdown nav inNavbar className="d-flex">
                        <DropdownToggle nav caret className="align-self-center btn btn-primary text-light">
                            <img src={props.token && props.img} alt="coin" className="imgUser img-fluid img-thumbnail border-0" key="1234" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            {!props.token &&
                                <DropdownItem nav caret>
                                    <NavLink to="/signup" className="fs-6 text-light text-decoration-none">Sign up</NavLink>
                                </DropdownItem>
                            }
                            {!props.token &&
                                <DropdownItem>
                                    <NavLink to="/login" className="fs-6 text-light text-decoration-none">Log in</NavLink>
                                </DropdownItem>
                            }
                            {props.token &&
                                <DropdownItem>
                                    <NavLink onClick={() => props.logOut()} exact to="/" className="fs-6 align-self-center text-light text-decoration-none me-3">Log out</NavLink>
                                </DropdownItem>
                            }
                        </DropdownMenu>
                    </UncontrolledDropdown>

                </div>
            </Navbar>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.users.token,
        img: state.users.img,
        firstname: state.users.firstname
    }
}
const mapDispatchToProps = {
    logOut: usersActions.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navegador);

