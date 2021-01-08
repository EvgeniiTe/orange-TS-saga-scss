import React from 'react';
import Image from 'react-bootstrap/Image';
import { Row, Col, Button, Container } from 'react-bootstrap';
import '../_style.scss';
import { HandleSelectItem } from '../types';
import { AccData } from '../../../reducers/types';

interface Props {
  list: AccData[];
  handleSelectItem: HandleSelectItem;
}

export const HomePageRender: React.FC<Props> = ({ list, handleSelectItem }) => {
  interface AccListProps {
    data: AccData[];
    selectItem: HandleSelectItem;
  }

  const AccList: React.FC<AccListProps> = ({ data = [], selectItem }) => {
    const items = data.map(({ id, login, html_url: url, avatar_url: avatarUrl }) => {
      return (
        <Row key={id} className="styledRow">
          <Col className="styledColStressFont" xs={12} md={2}>{login}</Col>
          <Col className="styledCol" xs={12} md={6}><a href={url}>Link to acc on Github</a></Col>
          <Col className="styledCol" xs={12} md={2} style={{ minHeight: '5rem' }}><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></Col>
          <Col className="styledCol" xs={12} md={2}><Button variant="primary" onClick={() => selectItem(login)}>MORE INFO</Button></Col>
        </Row>
      );
    });

    return (
      <>
        { items }
      </>
    );
  };

  return (
    <Container className="mainContainer">
      <Row className="styledHeadRow">
        <Col md={2}>ЛОГИН</Col>
        <Col md={6}>ССЫЛКА НА АККАУНТ</Col>
        <Col md={2}>АВАТАР</Col>
      </Row>
      <AccList data={list} selectItem={handleSelectItem} />
    </Container>
  );
};
