import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import './_style.scss';

interface Props {
  login?: string;
  ownerUrl?: string;
  avatarUrl?: string;
}

export const AccInfoBlock: React.FC<Props> = ({ login, ownerUrl, avatarUrl }: Props) => {
  return (
    <Row className="accInfoBlock" xs={1} md={3}>
      <Col className="styledColStressFont" md={6}>{login}</Col>
      <Col className="accCol" md={3}><a href={ownerUrl}>Link to acc on Github</a></Col>
      <Col className="accCol" md={3}><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></Col>
    </Row>
  );
};

AccInfoBlock.defaultProps = { login: 'empty', ownerUrl: 'empty', avatarUrl: 'empty' };
