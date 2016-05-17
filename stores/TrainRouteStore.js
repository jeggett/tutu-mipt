import AppDispatcher from '../dispatcher/AppDispatcher';
import {ReduceStore} from 'flux/utils';
import constants from '../constants/constants';

class TrainRouteStores extends ReduceStore {
  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.type) {

      case constants.FETCH_TRAIN_ROUTES:
        return [];

      case  constants.FETCH_TRAIN_ROUTES_SUCCESS:
        return action.payload.response;

      default:
        return state;

    }
  }
}

export default new TrainRouteStores(AppDispatcher);
