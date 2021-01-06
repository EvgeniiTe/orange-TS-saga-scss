import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Loader } from '../../loader';
import { ErrorIndicator } from '../../error-indicator';
import { ControlPanel } from '../../control-panel';
import { MakeActionType } from '../../../actions/types';
import { RepoSelectedState, Owner, RepoInfo } from '../../../reducers/types';
import { RepoPageRender } from './RepoPageRender';

interface Props extends RepoSelectedState, RouteComponentProps {
  makeAction: MakeActionType;
}

export const RepoPageContainer: React.FC<Props> = ({
  history,
  makeAction: getRepo,
  data: repoInfo,
  loading,
  error
}) => {
  const [owner, setOwner] = useState<Owner>({});
  const [repoInfoExceptReadme, setRepoInfoExceptReadme] = useState<RepoInfo>({ owner: {} });
  const [readmeFileUrl, setReadmeFileUrl] = useState<string>('');

  useEffect(() => {
    getRepo(history.location.pathname);
  }, []);

  useEffect(() => {
    if (repoInfo) {
      const ownerData = repoInfo.repoInfo.owner;
      setOwner(ownerData);
      const { download_url: urlForReadme } = repoInfo.readme;
      setReadmeFileUrl(urlForReadme);
      setRepoInfoExceptReadme(repoInfo.repoInfo);
    } else {
      const urlStr = history.location.pathname;
      const regex = /\w+/i;
      const user = urlStr.match(regex) || [];
      const ownerLogin = { login: user[0] };
      setOwner(ownerLogin);
    }
  }, [repoInfo]);

  const {
    login = undefined,
    html_url: ownerUrl = undefined,
    avatar_url: avatarUrl = undefined
  } = owner;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Container>
        <ErrorIndicator error={error} />
        <ControlPanel ownerLogin={login} />
      </Container>
    );
  }

  if (login === undefined) {
    return <ErrorIndicator error="This repo doesn't exist" />;
  }

  return (
    <>
      <RepoPageRender
        login={login}
        ownerUrl={ownerUrl}
        avatarUrl={avatarUrl}
        readmeFileUrl={readmeFileUrl}
        repoInfo={repoInfoExceptReadme}
      />
      <ControlPanel ownerLogin={login} />
    </>
  );
};
