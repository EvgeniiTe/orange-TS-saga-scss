import React from 'react';
import './_style.scss';
import { Row, Col } from 'react-bootstrap';
import { PushedAt } from '../pages/acc-page/pushed-at';

interface Props {
  repoName?: string;
  description?: string;
  urlRepo?: string;
  pushedAt?: string;
}

export const RepoInfoBlock: React.FC<Props> = ({
  repoName,
  description,
  urlRepo,
  pushedAt
}: Props) => {
  return (
    <Row className="repoInfoBlock" xs={1} md={4}>
      <Col className="styledColStressFont">{repoName}</Col>
      <Col className="repoCol">{description}</Col>
      <Col className="repoCol"><a href={urlRepo}>Link to repo on Github</a></Col>
      <Col className="repoCol">
        <PushedAt pushedAt={pushedAt} />
      </Col>
    </Row>
  );
};

RepoInfoBlock.defaultProps = {
  repoName: 'undefined',
  description: 'undefined',
  urlRepo: 'undefined',
  pushedAt: 'undefined'
};
