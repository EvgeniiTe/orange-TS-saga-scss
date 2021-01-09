import { withRouter } from 'react-router-dom';
import { compose } from '../../../helpers/compose';
import { withApiRequest } from '../../../helpers/hoc-helpers/withApiRequest';
import { withUseStoreOnceAfterMount } from '../../../helpers/hoc-helpers/withUseStoreOnceAfterMount';
import { actionForAccListSaga } from '../../../actions';

import { HomePageContainer } from './HomePageContainer';

export const HomePage = compose(
  withApiRequest(),
  withUseStoreOnceAfterMount('accList', actionForAccListSaga)
)(withRouter(HomePageContainer));
