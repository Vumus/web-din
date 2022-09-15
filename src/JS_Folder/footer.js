import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import '../CSS_Folder/footer.css';


function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <Row>
            <Col>
              <h4>Dinas Pehubungan Lampung Tengah</h4>
              <ul className="list-unstyled">
                <li>Saya suka makan roti campur susu kental manis</li>
                <li>Mesuji, Lampung</li>
                <li>Jl. Entah Kemana, No. 3</li>
              </ul>
            </Col>
            <Col>
              <h4>Sosial Media</h4>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twittard</li>
                <li>Instagram</li>
              </ul>
            </Col>
            <Col>
              <h4>Keluhan & Saran</h4>
              <ul className="list-unstyled">
                <li>072-****-****</li>
                <li>admindishubmesuji@gmail.com</li>
                <li>Kentang Goreng Enak Lho... </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row>
            <p className="col-sm">
              &copy;{new Date().getFullYear()} DISHUB Lampung Tengah | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </Row>
        </div>
      </div>
    );
  }
  
  export default Footer;