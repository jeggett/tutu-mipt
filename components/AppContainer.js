import React, {Component} from 'react';
import {Container} from 'flux/utils';
import TrainRouteStore from '../stores/TrainRouteStore';
import ActionCreators from '../actions/ActionCreators';

class App extends Component {

  componentDidMount() {
    ActionCreators.fetchTrainRoutes();
  }

  render() {
    return (
      <div>tutu-mipt</div>
    );
  }
}

App.getStores = () => ([TrainRouteStore]);
App.calculateState = (prevState) => ({
  trainRoutes: TrainRouteStore.getState()
});

const AppContainer = Container.create(App);

export default AppContainer;
