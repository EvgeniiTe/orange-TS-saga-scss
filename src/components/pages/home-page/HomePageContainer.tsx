import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Loader } from '../../loader';
import { ErrorIndicator } from '../../error-indicator';
import { HomePageRender } from './HomePageRender';
import { MakeActionType } from '../../../actions/types';
import { AccListState } from '../../../reducers/types';

interface Props extends AccListState, RouteComponentProps {
  makeAction: MakeActionType;
}

export const HomePageContainer: React.FC<Props> = ({
  history,
  makeAction: getRandomAccs,
  data: accList,
  loading,
  error
}: Props) => {
  useEffect(() => {
    getRandomAccs(3);
  }, []);

  const handleSelectItem = (login: string): void => {
    history.push(`/${login}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return <HomePageRender list={accList} handleSelectItem={handleSelectItem} />;
};
