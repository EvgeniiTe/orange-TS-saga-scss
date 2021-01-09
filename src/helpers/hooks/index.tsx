import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { ServiceFunctions, FuncActionForSaga } from '../../actions/types';
import { RootState } from '../../reducers/index';

export const useStoreOnceAfterMount = (
  service: ServiceFunctions,
  storeKey: string,
  action: FuncActionForSaga
) => {
  const key = storeKey as keyof RootState;
  const obj = useSelector((state: RootState) => state[key], shallowEqual);
  const { data, loading, error } = obj;
  const dispatch = useDispatch();

  const makeAction = (param: number | string) => {
    const { type, payload } = action(service, param);
    return dispatch({ type, payload });
  };

  return ({ makeAction, data, loading, error });
};
