import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';

import {Feather} from '@expo/vector-icons';

import {
  MessageScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  LogoutScreen
} from './';

import Sidebar from './Sidebar';


const DrawerNavigator = createDrawerNavigator(
  {
    MessageScreen : {
      screen : MessageScreen,
      navigationOptions : {
        title: "Messages",
        drawerIcon: ({tintColor}) => <Feather name="message-square" size={16} color={tintColor}/>
      }
    },
    ListScreen : {
      screen : ListScreen,
      navigationOptions : {
        title: "Lists",
        drawerIcon: ({tintColor}) => <Feather name="list" size={16} color={tintColor}/>
      }
    },
    ReportScreen : {
      screen : ReportScreen,
      navigationOptions : {
        title: "Reports",
        drawerIcon: ({tintColor}) => <Feather name="bar-chart" size={16} color={tintColor}/>
      }
    },
    StatisticScreen : {
      screen : StatisticScreen,
      navigationOptions : {
        title: "Statistics",
        drawerIcon: ({tintColor}) => <Feather name="trending-up" size={16} color={tintColor}/>
      }
    },
    LogoutScreen : {
      screen : LogoutScreen,
      navigationOptions : {
        title: "Logout",
        drawerIcon: ({tintColor}) => <Feather name="log-out" size={16} color={tintColor}/>
      }
    },
  },
  {
    contentComponent: props => <Sidebar {...props} />,

    drawerWidth: Dimensions.get('window').width * 0.3,

    contentOptions: {
      activeBackgroundColor: 'rgba(212, 118, 207, 0.2)',
      activeTintColor: '#53115B',
      itemsContainerStyle: {
        marginTop: 16,
        marginHrizontal: 8,
      },
      itemstyle: {
        borderRadius: 4,
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);