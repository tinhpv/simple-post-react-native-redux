import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import IndexScreen from './src/screens/IndexScreen';
import DetailScreen from './src/screens/DetailScreen';
import reducers from './src/reducers';

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Index',
  },
);

const App = createAppContainer(AppNavigator);
const store = createStore(reducers, applyMiddleware(thunk));
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
