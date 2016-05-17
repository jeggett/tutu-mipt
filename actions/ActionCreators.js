import AppDispatcher from '../dispatcher/AppDispatcher';
import constants from '../constants/constants';
import TutuMipAPI from '../api/TutuMiptAPI';

const ActionCreators = {
  fetchTrainRoutes() {
    AppDispatcher.dispatchAsync(TutuMipAPI.fetchTrainRoutes(), {
      request: constants.FETCH_TRAIN_ROUTES,
      success: constants.FETCH_TRAIN_ROUTES_SUCCESS,
      failures: constants.FETCH_TRAIN_ROUTES_ERROR
    })
  },
};

export default ActionCreators;
