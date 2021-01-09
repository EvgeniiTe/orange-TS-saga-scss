import React from 'react';
import { useStoreOnceAfterMount } from '../hooks';
import { FuncActionForSaga, ServiceFunctions } from '../../actions/types';

export const withUseStoreOnceAfterMount = (
  storeKey: string,
  action: FuncActionForSaga
) => (Wrapped: any) => {
  interface Props {
    serviceFunctions: ServiceFunctions
  }
  return (props: Props) => {
    const { serviceFunctions } = props;
    const {
      data,
      loading,
      error,
      makeAction
    } = useStoreOnceAfterMount(serviceFunctions, storeKey, action);
    return (
      <Wrapped {...props} data={data} loading={loading} error={error} makeAction={makeAction} />
    );
  };
};
