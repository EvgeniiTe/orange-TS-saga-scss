import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './_style.scss';

export const Header: React.FC = () => (
  <>
    <div className="decorativeEl" />
    <div className="wellcome">HI! Glad to see YOU!</div>
    <header className="header">
      <div className="headerContainer">
        <Row className="headerRow" xs={1} md={3}>
          <Col className="companyName">
            AwesomeCompanyName
          </Col>
          <Col className="companyMotto">
            &#34;AwesomeCompanyMoto&#34;
          </Col>
          <Col className="companyLogo">
            <Image src="./@.svg" style={{ width: '8rem' }} />
          </Col>
        </Row>
      </div>
    </header>
  </>
);
