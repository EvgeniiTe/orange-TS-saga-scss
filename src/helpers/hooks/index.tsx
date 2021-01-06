import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { ServiceFunctions, FuncActionCreator } from '../../actions/types';
import { RootState } from '../../reducers/index';
// import { State } from '../../reducers/types';

export const useStoreOnceAfterMount = (
  service: ServiceFunctions,
  storeKey: string,
  action: FuncActionCreator
) => {
  const key = storeKey as keyof RootState;
  const obj = useSelector((state: RootState) => state[key], shallowEqual);
  const { data, loading, error } = obj;
  const dispatch = useDispatch();

  const makeAction = (param: number | string) => {
    return dispatch(action(service)(param));
  };

  return ({ makeAction, data, loading, error });
};
