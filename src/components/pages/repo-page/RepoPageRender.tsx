import React from 'react';
import { Row, Card, Container } from 'react-bootstrap';
import '../_style.scss';
import { AccInfoBlock } from '../../acc-info-block';
import { RepoInfoBlock } from '../../repo-info-block';
import { RepoInfo } from '../../../reducers/types';

interface Props {
  login?: string;
  ownerUrl?: string;
  avatarUrl?: string;
  readmeFileUrl?: string;
  repoInfo: RepoInfo;
}

export const RepoPageRender: React.FC<Props> = ({
  login,
  ownerUrl,
  avatarUrl,
  readmeFileUrl,
  repoInfo
}) => {
  const { name: repoName, description, html_url: urlRepo, pushed_at: pushedAt } = repoInfo;
  return (
    <Container className="mainContainer">
      <AccInfoBlock login={login} ownerUrl={ownerUrl} avatarUrl={avatarUrl} />
      <RepoInfoBlock
        repoName={repoName}
        description={description}
        urlRepo={urlRepo}
        pushedAt={pushedAt}
      />
      <Row>
        <Card style={{ width: '100%', textAlign: 'center' }}>
          <Card.Body>
            <Card.Title>Readme</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Repo&#39;s readme text</Card.Subtitle>
            <Card.Text><Card.Link href={readmeFileUrl}>Readme file</Card.Link></Card.Text>
            <Card.Link href={urlRepo}>Link to repo on Github</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
