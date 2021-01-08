import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { ControlPanel } from '../../control-panel';
import '../_style.scss';
import { AccInfoBlock } from '../../acc-info-block';
import { PushedAt } from './pushed-at';
import { AccSelectedRepo } from '../../../reducers/types';
import { HandleSelectItem } from '../types';

interface Props {
  list: AccSelectedRepo[];
  handleSelectItem: HandleSelectItem;
  login?: string;
  ownerUrl?: string;
  avatarUrl?: string;
}

export const AccPageRender: React.FC<Props> = ({
  list,
  handleSelectItem,
  login,
  ownerUrl,
  avatarUrl,
}) => {
  interface ReposListProps {
    data: AccSelectedRepo[];
    selectRepo: HandleSelectItem;
  }

  const ReposList: React.FC<ReposListProps> = ({ data = [], selectRepo }) => {
    const items = data.map(({ id, name, description, html_url: url, pushed_at: pushedAt }) => {
      return (
        <Row className="styledRow" key={id} onClick={() => selectRepo(name)}>
          <Col className="styledColStressFont" xs={12} md={3}>{name}</Col>
          <Col className="styledCol" xs={12} md={3}>{description}</Col>
          <Col className="styledCol" xs={12} md={3}><a href={url}>Link to repo on Github</a></Col>
          <Col className="styledCol" xs={12} md={3}><PushedAt pushedAt={pushedAt} /></Col>
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
      <AccInfoBlock login={login} ownerUrl={ownerUrl} avatarUrl={avatarUrl} />
      <Row className="styledHeadRow">
        <Col>НАЗВАНИЕ</Col>
        <Col>ОПИСАНИЕ</Col>
        <Col>ССЫЛКА</Col>
        <Col>ДАТА ИЗМЕНЕНИЯ</Col>
      </Row>
      <ReposList data={list} selectRepo={handleSelectItem} />
      <ControlPanel onlyHome />
    </Container>
  );
};
