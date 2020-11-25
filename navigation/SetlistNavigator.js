import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CreateSetlistScreen from '../screens/CreateSetlistScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const SetlistNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    CreateSetlist: CreateSetlistScreen,
  },
  {
    intialRouteName: 'Welcome',
  }
);

export default createAppContainer(SetlistNavigator);
