import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Nav, Navbar, Table } from 'react-bootstrap';

const mockData = [
  { id: 1, name: 'Choco Delight', quantity: 10 },
  { id: 2, name: 'Dark Fantasy', quantity: 15 },
  { id: 3, name: 'Milk Bar', quantity: 20 }
];

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    } else {
      setError('Please enter username and password');
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">ChocoZone</h2>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

const Sidebar = () => (
  <Nav className="flex-column bg-light p-3 h-100 min-vh-100">
    <Nav.Link as={Link} to="/home/chocolates">🍫 Chocolates</Nav.Link>
    <Nav.Link as={Link} to="/home/add">➕ Add Orders</Nav.Link>
    <Nav.Link as={Link} to="/home/orders">📦 Orders</Nav.Link>
    <Nav.Link as={Link} to="/home/stats">📊 Stats</Nav.Link>
    <Nav.Link as={Link} to="/logout">🚪 Logout</Nav.Link>
  </Nav>
);

const Header = ({ username }) => (
  <Navbar bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand>🍩 ChocoZone</Navbar.Brand>
      <Navbar.Text className="ms-auto text-white">Welcome, {username}</Navbar.Text>
    </Container>
  </Navbar>
);

const Footer = () => (
  <footer className="bg-dark text-white text-center p-3 mt-auto">
    <p>Address: 123 Chocolate Street, Sweet City</p>
    <p>Contact: 123-456-7890 | Email: info@chocozone.com</p>
  </footer>
);

const ChocolateTable = () => (
  <div>
    <h4>Chocolate Inventory</h4>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

const HomeContent = () => (
  <div>
    <h3>Welcome to ChocoZone</h3>
    <img src="https://via.placeholder.com/600x200?text=ChocoZone+Image" alt="ChocoZone" className="img-fluid mt-3" />
  </div>
);

const LogoutPage = () => (
  <Container className="mt-5 text-center">
    <h2>You have been logged out</h2>
    <p>Thank you for visiting ChocoZone.</p>
    <Link to="/">Login again</Link>
  </Container>
);

const HomePage = ({ username }) => (
  <Container fluid className="d-flex flex-column min-vh-100">
    <Header username={username} />
    <Row className="flex-grow-1">
      <Col md={2} className="bg-light">
        <Sidebar />
      </Col>
      <Col md={10} className="p-3">
        <Routes>
          <Route path="" element={<HomeContent />} />
          <Route path="chocolates" element={<ChocolateTable />} />
          <Route path="add" element={<ChocolateTable />} />
          <Route path="orders" element={<ChocolateTable />} />
          <Route path="stats" element={<ChocolateTable />} />
        </Routes>
      </Col>
    </Row>
    <Footer />
  </Container>
);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <LoginPage onLogin={setUser} />} />
        <Route path="/home/*" element={user ? <HomePage username={user} /> : <Navigate to="/" />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
