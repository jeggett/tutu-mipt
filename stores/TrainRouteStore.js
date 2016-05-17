import AppDispatcher from '../dispatcher/AppDispatcher';
import {ReduceStore} from 'flux/utils';

class TrainRouteStores extends ReduceStore {
  getInitialState() {
    return [];
  }
  
  reduce(state, action) {
    return state;
  }
}

export default new TrainRouteStores(AppDispatcher);
