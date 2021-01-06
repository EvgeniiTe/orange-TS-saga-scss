import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Loader } from '../../loader';
import { ErrorIndicator } from '../../error-indicator';
import { ControlPanel } from '../../control-panel';
import { AccPageRender } from './AccPageRender';
import { MakeActionType } from '../../../actions/types';
import { AccSelectedState, Owner } from '../../../reducers/types';

interface Props extends AccSelectedState, RouteComponentProps {
  makeAction: MakeActionType;
}

export const AccPageContainer: React.FC<Props> = ({
  history,
  makeAction: getAccRepos,
  data: reposList,
  loading,
  error
}) => {
  const [owner, setOwner] = useState<Owner>({});

  useEffect(() => {
    getAccRepos(history.location.pathname);
  }, []);

  useEffect(() => {
    if (reposList[0]) {
      const ownerData = reposList[0].owner;
      setOwner(ownerData);
    }
  }, [reposList]);

  const {
    login = undefined,
    html_url: ownerUrl = undefined,
    avatar_url: avatarUrl = undefined
  } = owner;

  const handleSelectItem = (repo: string): void => {
    history.push(`/${login}/${repo}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  if (login === undefined) {
    return (
      <Container>
        <ErrorIndicator error="This account has empty list of public repos" />
        <ControlPanel onlyHome />
      </Container>

    );
  }

  return (
    <AccPageRender
      list={reposList}
      handleSelectItem={handleSelectItem}
      login={login}
      ownerUrl={ownerUrl}
      avatarUrl={avatarUrl}
    />

  );
};
