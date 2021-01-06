import React from 'react';
import * as S from './styled';
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
    <S.RepoInfoBlock xs={1} md={4}>
      <S.StyledColStressFont>{repoName}</S.StyledColStressFont>
      <S.RepoCol>{description}</S.RepoCol>
      <S.RepoCol><a href={urlRepo}>Link to repo on Github</a></S.RepoCol>
      <S.RepoCol>
        <PushedAt pushedAt={pushedAt} />
      </S.RepoCol>
    </S.RepoInfoBlock>
  );
};

RepoInfoBlock.defaultProps = {
  repoName: 'undefined',
  description: 'undefined',
  urlRepo: 'undefined',
  pushedAt: 'undefined'
};
