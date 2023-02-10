import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const NavbarReact = () => {
  const item = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ml-auto">
          <NavLink eventKey="1" className="nav-link active" as={Link} to="/">
            Home
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/products">
            Proudct
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/about">
            About
          </NavLink>
          <NavLink eventKey="4" as={Link} to="/contact">
            Contact
          </NavLink>
          <NavLink eventKey="5"  as={Link} to="/cart">
            <i className="fa fa-shopping-cart me-1"></i> cart ({item.length})
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarReact;
