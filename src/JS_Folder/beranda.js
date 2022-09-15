import logo from '../logo.png';
import '../CSS_Folder/beranda.css';
import { Nav, Navbar, NavDropdown, Container, Row, Card } from 'react-bootstrap';

export default function Beranda() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-default'>
      <Container className='kontainer'>
        <Navbar.Brand className='text-header' href="/" style={{fontSize: "20px", fontFamily: "Times", fontWeight: "bold"}}>
          <img src={logo} className="header-logo" alt='logo'></img>
          DINAS PERHUBUNGAN
          <br/>Kab. Lampung Timur
        </Navbar.Brand>
        <Navbar.Toggle id="togglenav" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="navlink" href="/">Beranda</Nav.Link>
            <Nav.Link id="navlink" href="/Berita">Berita</Nav.Link>
            <Nav.Link id="navlink" href="/Artikel">Artikel</Nav.Link>
            <Nav.Link id="navlink" href="/Dokumen">Dokumen</Nav.Link>
            <NavDropdown title="Galeri" id="navlink">
              <NavDropdown.Item id="navlinkch" href="/GaleriFoto">Foto</NavDropdown.Item>
              <NavDropdown.Item id="navlinkch" href="/GaleriVideo">Video</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="navlink" href="/StatisPage">Statis Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
