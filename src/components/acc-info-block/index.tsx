import React from 'react';
import Image from 'react-bootstrap/Image';
import * as S from './styled';

interface Props {
  login?: string;
  ownerUrl?: string;
  avatarUrl?: string;
}

export const AccInfoBlock: React.FC<Props> = ({ login, ownerUrl, avatarUrl }: Props) => {
  return (
    <S.AccInfoBlock xs={1} md={3}>
      <S.StyledColStressFont md={6}>{login}</S.StyledColStressFont>
      <S.AccCol md={3}><a href={ownerUrl}>Link to acc on Github</a></S.AccCol>
      <S.AccCol md={3}><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></S.AccCol>
    </S.AccInfoBlock>
  );
};

AccInfoBlock.defaultProps = { login: 'empty', ownerUrl: 'empty', avatarUrl: 'empty' };
