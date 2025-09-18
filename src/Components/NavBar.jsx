import { useState } from "react";
import "../css/NavBar.css";
import logo from "../images/logo.png";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const CartData= useSelector(state=>state.mycart.cart);
  const CartLength= CartData.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `http://localhost:3000/admin/?adminid=${email}`;

    const response = await axios.get(api);
    console.log(response.data);

    if (response.data.length >= 1) {
      if (response.data[0].password == password) {
        navigate("/admin");
      } else {
        alert("Galat pass");
      }
    } else {
      alert("Invalid Email!");
    }
  };

  return (
    <>
      <nav className="main-nav">
        <div className="container">
          <div className="nav-inner">

            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              <ul className="menu-links">
                <li as={Link} to="home">Home</li>
                <li>Features</li>
                <li>Categories</li>
                <li>New Arrivals</li>
                <li>Sale</li>
                <li>About</li>
                <li onClick={handleShow}>Admin</li>
              </ul>
            </div>

            {/* Search Bar */}
            <div className="search-bar">
              <div className="search-box">
                <input type="text" placeholder="Search products..." />
                <span>🔍</span>
              </div>
            </div>

            {/* Right side icons */}
            <div className="icons">
              <button>❤️</button>
              <button className="cart-btn" onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}}> 🛒 <span id="cart-up-count"> {CartLength} </span> </button>
              <button>👤</button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-btn"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-inner">
                {/* Mobile Search */}
                <div className="mobile-search">
                  <input type="text" placeholder="Search products..." />
                  <span>🔍</span>
                </div>

                {/* Mobile Links */}
                <ul className="mobile-links">
                  <li>Home</li>
                  <li>Features</li>
                  <li>Categories</li>
                  <li>New Arrivals</li>
                  <li>Sale</li>
                  <li>About</li>
                  <li onClick={handleShow}>Admin</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Admin Login Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </Form.Group>

            <button className="btn-primary" type="submit" onClick={handleSubmit}>
              Login
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
